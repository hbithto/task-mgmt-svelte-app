import { z } from 'zod';

export const TaskSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    status: z.enum(["Assigned", "In-Progress", "Completed"], {
        errorMap: () => ({ message: "Please select a valid status" })
    }),
    dateAssigned: z.preprocess(
        (arg) => {
            if (typeof arg === "string" || arg instanceof Date) {
                const parsedDate = new Date(arg);
                return isNaN(parsedDate.getTime()) ? undefined : parsedDate; // Ensure valid date
            }
            return undefined;
        },
        z.date({ message: "Valid date is required" })
    ),
});

export type TaskType = z.infer<typeof TaskSchema>;
