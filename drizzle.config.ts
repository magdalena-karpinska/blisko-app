import "dotenv/config";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
  schema: "./src/db/schema.ts",
  out: "./drizzle",
});
