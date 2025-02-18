<script lang="ts">

    let { data } = $props();

</script>

<section class="w-full min-h-screen flex justify-center items-center">
    <div class="w-full max-w-[300px] mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-xl font-bold mb-8">{data.task.title}</h1>
        <p class="text-gray-700 mb-2"><strong>Description:</strong> {data.task.description || 'No description provided.'}</p>
        <p class="text-gray-700 mb-2">
            <strong>Status:</strong>
            <span class={
                data.task.status === 'Assigned' ? 'text-blue-500 bg-blue-200/40 rounded-full px-2 py-1 font-[500]' :
                data.task.status === 'In-Progress' ? 'text-yellow-500 bg-yellow-200/40 rounded-full px-2 py-1 font-[500]' :
                'text-green-500 bg-green-200/40 rounded-full px-2 py-1 font-[500]'
            }>
                {data.task.status}
            </span>
        </p>
        <p class="text-gray-700"><strong>Date Assigned:</strong> {data.task.dateAssigned.toLocaleDateString()}</p>
    </div>
</section>
