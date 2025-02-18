<script lang="ts">

	import TaskItem from '$lib/components/TaskItem.svelte';
  import { goto } from '$app/navigation';
  let { data } = $props();
  let allTasks = $state(data.tasks);

  let pageErrMessage = $state("");
  let pageSuccessMessage = $state("");

  const deleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        allTasks = allTasks.filter(task => task.id !== taskId);
        pageErrMessage = "";
        pageSuccessMessage = 'Task deleted';
      } else {
        pageSuccessMessage = "";
        pageErrMessage = 'Failed to delete task';
      }
    } catch (err) {
      // console.error('Error:', err);
      pageSuccessMessage = "";
      pageErrMessage = "Someting went wrong";
    }
  }

</script>

<svelte:head>
	<title>All Tasks</title>
</svelte:head>
  
<div class="w-full h-fit flex flex-col justify-center items-center text-stone-700">
  <h1 class="w-full h-fit mt-9 text-center text-lg font-[600] text-stone-700 px-3 py-2 bg-cyan-100">Manage Your Work</h1>
  <button onclick={()=>goto("/tasks/add-task")} class="w-fit h-fit mt-9 text-base font-[600] text-[#0866FF] bg-transparent hover:bg-blue-200/50 rounded border border-stone-300 px-5 py-2 cursor-pointer">
    {`+ Add Task`}
  </button>

  {#if pageSuccessMessage}
    <p class="max-w-md w-full text-sm text-emerald-600 font-[400] my-5 px-2 py-1 bg-emerald-300/30">
      {pageSuccessMessage}
    </p>
  {/if}
  {#if pageErrMessage}
    <p class="max-w-md w-full text-sm text-red-600 font-[400] my-5 px-2 py-1 bg-red-300/30">
      {pageErrMessage}
    </p>
  {/if}


  <section class="flex flex-col gap-3 mt-8">
    <h1 class="underline underline-offset-4">All Tasks</h1>
  
    {#if allTasks && allTasks.length}

      <div class="min-w-full divide-y divide-gray-200 table-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Assigned</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each allTasks as task (task.id)}
              <TaskItem {task} onDelete={deleteTask} />
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </section>
</div>
