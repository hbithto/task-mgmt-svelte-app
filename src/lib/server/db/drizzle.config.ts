import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
if (!process.env.SQLITE_DB_PATH) throw new Error('SQLITE_DB_PATH is not set');

dotenv.config();

export default defineConfig({
    dialect: "sqlite",
	schema: './src/lib/server/db/schema.ts',
	dbCredentials: {
		url: process.env.SQLITE_DB_PATH || 'src/lib/server/db/data.sqlite'
	},
	out: './src/lib/server/db/migrations',
    verbose: true,
    strict: true,
});
