import { db } from '$lib/server/db/client';
import { tasks, type InsertTaskParams } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

const createNewTask = async (task: InsertTaskParams) => {
    await db.insert(tasks).values(task);
};

const getAllTasks = async () => {
    return await db.select().from(tasks).orderBy(desc(tasks.updatedAt));
};

const editTaskById = async (task: InsertTaskParams & { id: string }) => {
    const result = await db.update(tasks).set(task).where(eq(tasks.id, task.id));
    return result.changes > 0;
};

const getTaskById = async (id: string) => {
    const task = await db.select().from(tasks).where(eq(tasks.id, id));

    return task[0];
};

const deleteTaskById = async (id: string) => {
    const result = await db.delete(tasks).where(eq(tasks.id, id));
    return result.changes > 0; // result.changes reflects the no of rows affected.
};

export { deleteTaskById, editTaskById, getAllTasks, getTaskById, createNewTask };
