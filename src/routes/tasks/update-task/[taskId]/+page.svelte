<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
  
    let { data } = $props();
  
    const { form, errors, message, enhance } = superForm(data.form);
  </script>
    
  <div class="w-full h-fit flex flex-col justify-center items-center text-stone-700 mt-6">
    {#if $message}<h3 class="bg-cyan-300/50 rounded px-3 py-2">{$message}</h3>{/if}
  
    <div class="w-fit h-fit mt-9 text-base font-[600] text-stone-700">
      <p>Update a Task</p>
    </div>
    <form use:enhance action="?/updateTask" method="POST" class="w-full space-y-4 max-w-[400px] mx-auto mt-8 p-4 rounded border border-stone-300 shadow-md shadow-black/10">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input id="title" name="title" type="text" bind:value={$form.title}
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
        />
        {#if $errors.title}
          <p class="text-red-600 text-sm mt-1">{$errors.title}</p>
        {/if}
      </div>
    
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <input id="description" name="description" type="text" bind:value={$form.description}
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
        />
        {#if $errors.description}
          <p class="text-red-600 text-sm mt-1">{$errors.description}</p>
        {/if}
      </div>
    
      <div>
        <label for="dateAssigned" class="block text-sm font-medium text-gray-700">Date Assigned</label>
        <input id="dateAssigned" name="dateAssigned" type="date" bind:value={$form.dateAssigned}
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
        />
        {#if $errors.dateAssigned}
          <p class="text-red-600 text-sm mt-1">{$errors.dateAssigned}</p>
        {/if}
      </div>
    
      <div>
        <label for="status" class="block text-sm font-medium text-gray-700 mt-4">Status</label>
        <select id="status" name="status"
          class="w-full p-2 border rounded-md text-sm font-medium"
          bind:value={$form.status}
        >
          <option value="Assigned">Assigned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
        </select>
        {#if $errors.status}
          <p class="text-red-500 text-sm">{$errors.status}</p>
        {/if}
      </div>
      
      <button type="submit" class="w-full bg-stone-800 text-white px-4 py-2 rounded-md hover:bg-stone-900">
        Update Task
      </button>
      <a href="/tasks" class="block w-full text-stone-800 bg-stone-300 text-center px-4 py-2 rounded-md border mt-2">
        Back
      </a>
    </form>
  </div>
