<!-- <script lang="ts">

  import TaskItem from '$lib/components/TaskItem.svelte';
  type ThisTask = {
        id: string;
        title: string;
        description: string | null;
        status: string;
        dateAssigned: Date;
        createdAt: Date;
        updatedAt: Date;
    }

  let { tasklist }: {
    tasklist: ThisTask[];
  } = $props();
  
</script>

<section class="flex flex-col gap-3 mt-8">
  <h1>All Tasks</h1>

  {#if tasklist && tasklist.length}
		<table>
			<thead>
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Description</th>
					<th scope="col">Status</th>
					<th scope="col">Date Assigned</th>
				</tr>
			</thead>

			<tbody>
				{#each $tasklist as task (task.id)}
          <TaskItem {task} />
				{/each}
			</tbody>
		</table>
	{/if}
</section> -->
