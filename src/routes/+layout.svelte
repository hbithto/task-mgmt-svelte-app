<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-stone-100 to-cyan-50">
    {@render children()}
</div>
