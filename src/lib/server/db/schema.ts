import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { generateRandomId } from '../utils';

const timestamp = {
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
};

const users = sqliteTable('users', {
	id: text('id')
		.primaryKey()
		.notNull()
		.$defaultFn(() => generateRandomId()),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	...timestamp,
});

const tasks = sqliteTable('tasks', {
	id: text('id')
		.primaryKey()
		.notNull()
		.$defaultFn(() => generateRandomId()),
	title: text("title").notNull(),
	description: text("description"), // Optional field (can be null)
	status: text("status").notNull(), // SQLite doesn’t have a native enum type, so storing the status as text.
	dateAssigned: integer('date_assigned', { mode: "timestamp" }).notNull(),
	...timestamp,
});

type InsertTaskParams = typeof tasks.$inferInsert;
type InsertUserParams = typeof users.$inferInsert;

export { users, tasks, type InsertTaskParams, type InsertUserParams };
