"use server";

import db from "@/db/drizzle";
import { getUserProgress } from "@/db/queries";
import { challenges, challengesProgress, userProgress } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const upsertChallengeProgress = async (challengeId: number) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.query.challengesProgress.findFirst(
    {
      where: and(
        eq(challengesProgress.userId, userId),
        eq(challengesProgress.challengeId, challengeId)
      ),
    }
  );
  const isPractise = !!existingChallengeProgress;

  if (currentUserProgress.hearts === 0 && !isPractise) {
    return { error: "hearts" };
  }

  if (isPractise) {
    await db
      .update(challengesProgress)
      .set({
        completed: true,
      })
      .where(eq(challengesProgress.id, existingChallengeProgress.id));

    await db
      .update(userProgress)
      .set({
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points + 10,
      })
      .where(eq(userProgress.userId, userId));

    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
    return;
  }

  await db.insert(challengesProgress).values({
    challengeId,
    userId,
    completed: true,
  });

  await db
    .update(userProgress)
    .set({
      points: currentUserProgress.points + 10,
    })
    .where(eq(userProgress.userId, userId));
};
