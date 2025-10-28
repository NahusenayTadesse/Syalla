<script>
      import { Button } from "$lib/components/ui/button/index.js";
	import { btn, glass } from "$lib/global.svelte";
	import { TextAlignJustify, X } from "@lucide/svelte";
	import { slide } from "svelte/transition";
    import * as Sheet from "$lib/components/ui/sheet/index.js";


   let pages = [
    { name: 'Home', href: '/'},
    { name: 'Colocation', href: '/colocation'},
    { name: 'Pricing', href: '/pricing'},
   ];


  
</script>

<div class="hidden lg:flex flex-row gap-4 justify-self-center items-center z-2 
justify-between fixed top-4 bg-[#0F1211] p-4 rounded-lg px-6 w-3/5 border-0.5 shadow-lg shadow-white/10 border-white " >
   <div class="flex flex-row gap-16 items-center justify-center"> 
   <a class="text-lg font-bold hover:scale-110 transition-transform ease-in-out duration-300" href="/">Syaala </a>
    <div class="flex flex-row gap-4 items-center justify-center" >
      {#each pages as page }
      <a href={page.href} class="hover:scale-110 transition-transform ease-in-out duration-300">{page.name}</a> 
      {/each}
    </div>
   </div>

   <div class="flex flex-row justify-center items-center gap-4">

     

        <Button variant="outline" href="/colocation" class="{btn}  text-gray-1">
Explore Colocation       
</Button>

  <Button class={btn} href="https://platform.syaala.com/" target='_blank'>
Start Deploying
       </Button>
    
   </div>
     
</div>

<!-- Mobile Nav -->

<nav class="lg:hidden sticky top-4 z-10 flex flex-row justify-between items-center p-4">

  <Sheet.Root>
  <Sheet.Trigger><TextAlignJustify /></Sheet.Trigger>
  <Sheet.Content class="bg-black/10 backdrop-blur-lg" side="left" >
    <Sheet.Header class="flex flex-col pt-8 gap-4">

      <h3 class="text-transparent bg-clip-text
           bg-linear-to-r from-green-1 to-green-2">Syalla</h3>
     <ul class="flex flex-col gap-2 border-0! justify-center items-start pt-12">

        {#each pages as section}
        <li>
            <a
                href={section.href}
                title={section.name}
                class="hover:text-primary transition-transform duration-300 ease-in-out hover:scale-125 text-xl"
                >
                {section.name} 
            </a>
            </li>
        {/each}  
        </ul>

    </Sheet.Header>
  </Sheet.Content>
</Sheet.Root>

   <!-- <button class="p-0" onclick={()=> open = !open}>
    <Menu />
   </button> -->

    <!-- {#if open}
       <ul class="flex flex-col w-[100%] absolute top-16 p-2 right-0 
         z-10000 gap-2 justify-center items-start pl-4  bg-black/10 backdrop-blur-lg">

        {#each pages as section}
        <li transition:slide|global>
            <a
                href={section.href}
                title={section.name}
                class="hover:text-primary transition-transform duration-300 ease-in-out hover:scale-125 text-xl"
                onclick={()=> open = !open}>
                {section.name} 
            </a>
            </li>
        {/each}  
        </ul>

    {/if} -->

      <Button class={btn}>
Start Deploying
       </Button>

   </nav>