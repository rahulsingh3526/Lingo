// src/migrate.ts

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { config } from "dotenv";
import * as schema from "../db/schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    // await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Resetting the database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengesProgress);
    await db.delete(schema.userSubscription);

    console.log("Resetting completed");
  } catch (error) {
    console.error("Failed to reset the database", error);
    process.exit(1);
  }
};

main();
