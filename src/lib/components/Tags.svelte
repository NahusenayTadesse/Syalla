<script lang="ts">
	import { glass } from "$lib/global.svelte";

    let { content }: { content: string } = $props();

</script>


 <span class="inline-flex items-center justify-center lg:text-[12px] text-[16px] flex-row gap-3 px-4 
        py-1 rounded-full {glass} ">
            <img src="/icons/heroAi.svg" alt="icons">
            {content}</span>