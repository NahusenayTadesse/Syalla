<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Stars from '$lib/components/Stars.svelte';
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

<Footer />
<Stars />