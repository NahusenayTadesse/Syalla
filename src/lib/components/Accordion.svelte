<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { Plus } from '@lucide/svelte';
	import { glass } from '$lib/global.svelte';
    let isOpen = $state(false);
    let { title, description }: {title: string, description: string} = $props();
</script>
   
   <div class="flex flex-col w-full lg:justify-self-center gap-2 px-6 py-8 rounded-lg {glass} transition-all duration-300 ease-in-out">
   <button onclick={() => isOpen = !isOpen} 
    class="flex flex-row justify-between lg:items-center" 
    transition:fade={{ duration: 300 }}>

    <h5 class="text-md">{title} </h5>
    <Plus class="h-6 w-6 {isOpen ? '-rotate-45' : ''} transition-transform duration-600"/></button>

   {#if isOpen}
       <p transition:fly={{y: -20, duration: 300}}>{description}</p>
   {/if}
   </div> 


