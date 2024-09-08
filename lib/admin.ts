import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2hdEyyglmz4RwzopYHfAXMrFUHs"];

export const IsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
