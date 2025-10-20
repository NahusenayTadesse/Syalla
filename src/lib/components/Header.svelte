<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";

   let pages = [
    { name: 'Inference', href: '/inference'},
    { name: 'Colocation', href: '/colocation'},
    { name: 'Pricing', href: '/Pricing'},
   ]
</script>

<div class="flex flex-row gap-4 justify-self-center items-center z-2 justify-between fixed top-4 bg-[#0C270C] p-4 rounded-lg px-6 w-3/5" >
   <div class="flex flex-row gap-16 items-center justify-center">
   <a class="text-lg font-bold hover:scale-110 transition-transform ease-in-out duration-300" href="/">Syaala </a>
    <div class="flex flex-row gap-4 items-center justify-center" >
      {#each pages as page }
      <a href={page.href} class="hover:scale-110 transition-transform ease-in-out duration-300">{page.name}</a> 
      {/each}
    </div>
   </div>

   <div class="flex flex-row justify-center items-center gap-4">

     

        <Button variant="outline" class="{btn} {glass} text-gray-1">
Explore Colocation       
</Button>

  <Button class={btn}>
Start Deploying
       </Button>
    
   </div>
     
</div>