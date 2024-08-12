import "dotenv/config";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:password@localhost:5432/postgres",
  },
  schema: "./src/db/schema.ts",
  out: "./drizzle",
});
