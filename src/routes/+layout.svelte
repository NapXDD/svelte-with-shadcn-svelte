<script lang="ts">
	import { Footer } from '$lib/components/footer';
	import { Header } from '$lib/components/header';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-[100vh] flex-col">
	<div class="w-full">
		<Header />
	</div>
	<div class="flex flex-1 flex-col p-1">
		{@render children()}
	</div>
	<div class="w-full">
		<Footer />
	</div>
</div>
