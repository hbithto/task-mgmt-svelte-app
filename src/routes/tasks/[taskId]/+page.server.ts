import { getTaskById } from "$lib/server/db/tasks";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
    const { taskId } = params;
    const task = await getTaskById(taskId);

    if (!task) {
        throw error(404, 'Task not found');
    }

    return {
        task,
    };
};


export const actions = {
}
