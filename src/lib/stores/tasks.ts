import { writable } from 'svelte/store';

import type { TaskType } from '$lib/schema/taskSchema';

type ExtendedTaskType = {
  id : string;
} & TaskType;

export const tasks = writable<ExtendedTaskType[]>([
  {
    id: "5432862514",
    title: "Complete project documentation",
    description: "Finalize and review all project-related documents.",
    status: "Assigned",
    dateAssigned: new Date("2025-02-10"),
  },
  {
    id: "5432843965",
    title: "Develop user authentication module",
    description: "Implement login and registration functionalities.",
    status: "In-Progress",
    dateAssigned: new Date("2025-02-11"),
  },
  {
    id: "5432897842",
    title: "Conduct user acceptance testing",
    description: "Organize UAT sessions with stakeholders.",
    status: "Completed",
    dateAssigned: new Date("2025-02-12"),
  },
]);
