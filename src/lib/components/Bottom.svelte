<script lang="ts">
	import { btn, glass } from "$lib/global.svelte";
          import { Button } from "$lib/components/ui/button/index.js";

    let { call, title, btn1, btn2, href1, href2, para }: {call: string, title:string, btn1:string, btn2:string, href1:string, href2:string, para:string } = $props()

</script>
<section class="w-screen p-8 py-16 flex flex-col gap-4 justify-center items-center
isolate  ring-white/5 ring-1 bg-opacity-white-10 bg-white/0 shadow-sm shadow-white/20
          backdrop-blur-lg bg-cover bg-[url(/images/light5.png)] bg-center
">
    <p>
        {call}
    </p>
    <h2 class="text-center">{@html title}</h2>
    <div class="flex flex-row gap-2 justify-center items-center">
        <Button href={href1} class={btn}>
         {btn1}
        </Button>
        {#if btn2 !== ''}
         <Button variant="outline" href={href2} class="{btn} {glass} text-gray-1">
                {btn2}
            </Button>
        {/if}
    </div>

    <p class="text-gray-1">{para}</p>

</section>