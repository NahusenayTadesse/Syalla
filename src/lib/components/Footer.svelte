<script>
  const platform = [
    { name: 'Features', href: '#'},
    { name: 'Pricing', href: '#'},
    { name: 'Consulting', href: '#'},
    { name: 'Launch Console', href: '#'}
  ];
   const resources = [
    { name: 'Documentation', href: '#'},
    { name: 'Quick Start', href: '#'},
    { name: 'API Reference', href: '#'}
  ];

   const legal = [
    { name: 'Terms of Service', href: '#'},
    { name: 'Privacy Policy', href: '#'},
    { name: 'Contact Support', href: '#'}
  ];

  let year = new Date().getFullYear();
</script>


{#snippet footer(title='', links = [{name: '', href: ''}])}
    <div class="flex flex-col gap-4">
         <p class="font-bold">{title}</p>

         {#each links as link}

             <a href={link.href} 
             class="text-gray-1 hover:scale-105 duration-300 transition-all ease-in-out" >{link.name}</a>
            
         {/each}
    </div>
{/snippet}



<footer class="flex flex-col gap-4 justify-center items-center px-[10%] mt-8">
        <div class="grid grid-cols-4 w-full place-items-center items-start p-8 py-16 px-0">

            <div class="flex flex-col gap-4">
                <h4 class="text-primary">Syaala LLC</h4>
                <p class="text-gray-1">
                    Deploy AI models in 60 seconds, From $5 prepaid credits.
                </p>
            </div>

            {@render footer('Platform', platform)}
            {@render footer('Resources', resources)}
            {@render footer('Legal', legal)}

        </div>

            <div class="flex flex-row justify-between w-full">
                <p class="text-gray-1">
                    ©{year} Syaala LLC. Memphis, TN.
                </p>
                <p class="text-gray-1">
                    Deploy AI models in seconds, not hours.
                </p>
            </div>
</footer>