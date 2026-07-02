import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import path from "path";
import url from "url";

// Get current directory for SQLite file
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Create SQLite database in the root project directory
const dbPath = path.resolve(__dirname, "../../../sqlite.db");
const client = createClient({ url: `file:${dbPath}` });

export const db = drizzle(client, { schema });

export * from "./schema";
