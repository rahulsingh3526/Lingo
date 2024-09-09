import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { IsAdmin } from "@/lib/admin";
import { units } from "@/db/schema";

export const GET = async () => {
  if (!IsAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const data = await db.query.units.findMany();
  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!IsAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await req.json();

  const data = await db
    .insert(units)
    .values({
      ...body,
    })
    .returning();
  return NextResponse.json(data[0]);
};
