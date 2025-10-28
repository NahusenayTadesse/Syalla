<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import '../app.css';
	import favicon from '/favicon.png';

	let { children } = $props();

	import '../app.css';
	import { getFlash } from 'sveltekit-flash-message';
  import {  page } from '$app/state';
  import { toastmsg, errormsg } from '$lib/global.svelte';

  const flash = getFlash(page, { clearAfterMs: 5000 });
  

	import { fly } from 'svelte/transition';
	import { CircleCheckBig, CircleX } from '@lucide/svelte';



   let iconify = $state("h-6 w-6");
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Syaala LLC</title>
</svelte:head>
{#if $flash}
 
  <div class="flex flex-row gap-2 
  {$flash.type==='success' ? toastmsg: errormsg}" 
  transition:fly={{x:20, duration: 300  }}>
  {#if $flash.type==='success'}
    <CircleCheckBig class={iconify} />
   {:else}
   <CircleX class={iconify} />
  {/if}
    {$flash.message}

  </div>


{/if}

<Header />

{@render children?.()}

<Footer />
<Stars />