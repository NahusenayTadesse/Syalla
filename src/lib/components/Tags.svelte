<script lang="ts">
	import { glass } from "$lib/global.svelte";

    let { content }: { content: string } = $props();

</script>


 <span class="inline-flex items-center justify-center lg:text-[12px] text-[18px] flex-row gap-[12px] px-[16px] 
        py-[4px] rounded-full {glass} ">
            <img src="/icons/heroAi.svg" alt="icons">
            {content}</span>