<script lang="ts">
	import Tags from "./Tags.svelte";
          import { Button } from "$lib/components/ui/button/index.js";
          import { ArrowRight } from '@lucide/svelte'


    let { title, content, para, btn = false, btnName='', href='' }: {title: string, content:string, para:string, btn:boolean, btnName:string, href:string } = $props()

    
</script>


<div class="flex flex-col gap-4">
<div class="lg:max-w-auto w-full">
     <Tags {content} />
</div>
  <h2>{title}</h2>
  <p class="text-gray-1 lg:w-1/2 w-full">{para}</p>
 {#if btn} 
  
   <Button {href} class="bg-white text-black w-xs" target='_blank'>{btnName} <ArrowRight /></Button>
 {/if}
</div>