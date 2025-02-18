import { deleteTaskById } from '$lib/server/db/tasks';
import { error, json } from '@sveltejs/kit';

export const DELETE = async ({ params }) => {
    const { taskId } = params;
    try {
        const success = await deleteTaskById(taskId);
        if (!success) {
            throw error(404, 'Task not found');
        }
        return json({ message: 'Task deleted successfully' });
    } catch (err) {
        console.log(err);
        throw error(500, 'An error occurred while deleting the task');
    }
}
