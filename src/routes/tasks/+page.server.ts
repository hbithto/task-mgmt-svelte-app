import { getAllTasks } from "$lib/server/db/tasks";

export const load = async () => {
    return {
        tasks: await getAllTasks()
    };
};
