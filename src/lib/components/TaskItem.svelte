<script lang="ts">

  import { goto } from "$app/navigation";

  let { 
    task,
    onDelete
  } = $props();
  
  // You might want functions here to toggle completion, delete, or edit the task.
</script>

<tr class={`text-sm font-semibold ${task.status === "Completed" ? "text-gray-400" : "text-gray-700"} hover:bg-gray-100`}>
  <td class="px-6 py-4 whitespace-normal break-words">
    <a href="/tasks/{task.id}" class="text-blue-600 hover:underline">
      {task.title}
    </a>
  </td>
  <td class="px-6 py-4 text-center max-w-[200px] truncate">
      {task.description ? task.description : `-`}
  </td>
  <td class="px-6 py-4">
    <span class={`px-4 py-2 rounded-2xl ${task.status === "In-Progress" ? "bg-yellow-300/40" : (task.status === "Completed" ? "bg-green-300/40" : "bg-blue-300/40")}`}>
      {task.status}
    </span>
  </td>
  <td class="px-6 py-4">
    {task.dateAssigned.toLocaleDateString()}
  </td>
  <td class="px-6 py-4 flex gap-2">
    <button
      type="button"
      onclick={()=>goto(`/tasks/update-task/${task.id}`)}
      class="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
    >
      Edit
    </button>
    
    <button
      type="button"
      onclick={() => onDelete(task.id)}
      class="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
    >
      Delete
    </button>
  </td>
</tr>
