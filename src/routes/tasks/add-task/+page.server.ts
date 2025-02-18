import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { TaskSchema } from '$lib/schema/taskSchema';
import { generateRandomId } from '$lib/server/utils';
import { createNewTask } from '$lib/server/db/tasks';
import { fail } from '@sveltejs/kit';
// The load function initializes the form and passes it to the page.
export const load = async () => {
    const form = await superValidate(zod(TaskSchema));
    return { form }; // always return the form from load
};

// The actions handle form submissions. The default action validates the data and then processes it.
export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(TaskSchema));

        if (!form.valid) {
            return { form };
        }

        const newTask = {
            id: generateRandomId(),
            title: form.data.title,
            description: form.data.description,
            status: form.data.status,
            dateAssigned: form.data.dateAssigned,
        };

        try {
			await createNewTask(newTask);
			
			return message(form, 'Task added successfully!');
		} catch (error) {
            console.error(error);
			return fail(500, {
				error: 'Something went wrong while adding the task. Please try again.'
			});
		}
    }
};
