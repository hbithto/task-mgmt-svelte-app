import { error, fail } from '@sveltejs/kit';
import { editTaskById, getTaskById } from '$lib/server/db/tasks';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { TaskSchema } from '$lib/schema/taskSchema';

export const load = async ({ params }) => {
    const { taskId } = params;
    const task = await getTaskById(taskId);

    if (!task) {
        throw error(404, 'Task not found');
    }


    const prevTask = {
        title: task.title,
        description: task.description ?? undefined,
        status: task.status as "Assigned" | "In-Progress" | "Completed",
        dateAssigned: task.dateAssigned,
    }

    const form = await superValidate(prevTask, zod(TaskSchema));
    return { form };
};



export const actions = {
    updateTask: async ({ params, request }) => {
        const { taskId } = params;
        const form = await superValidate(request, zod(TaskSchema));

        if (!form.valid) {
            return { form };
        }

        const updatedTaskData = {
            id: taskId,
            title: form.data.title,
            description: form.data.description,
            status: form.data.status,
            dateAssigned: form.data.dateAssigned,
            updatedAt: new Date(),
        };

        try {
            const task = await editTaskById(updatedTaskData);

            if (!task) {
                throw error(404, 'Task not found');
            }

            return message(form, 'Task updated successfully!');
        } catch (error) {
            console.error(error);
            return fail(500, {
                error: 'Something went wrong while updating the task. Please try again.'
            });
        }
    }
};
