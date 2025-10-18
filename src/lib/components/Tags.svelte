<script lang="ts">
	import { glass } from "$lib/global.svelte";

    let { content }: { content: string } = $props();

</script>


 <p class="inline-flex items-center justify-center text-[12px]  flex-row gap-[12px] px-[16px] 
        py-[4px] rounded-full {glass} ">
            <img src="/icons/heroAi.svg" alt="icons">
            {content}</p>