<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import favicon from '/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Syaala LLC</title>
</svelte:head>

<Header />

{@render children?.()}
