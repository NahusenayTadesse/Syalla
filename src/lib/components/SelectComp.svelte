 <script lang="ts">
     import * as Select from "$lib/components/ui/select/index.js";
	import { glass, selectItem } from "$lib/global.svelte";

    let { value = $bindable(), items, name } = $props();
    function getItemNameById(items: any, value: any) {
  const item = items.find(i=> i.value === value);
  return item ? item.name : null; // returns null if not found
}
 </script>
 <Select.Root type="single" {name} bind:value  >
            <Select.Trigger class="w-full capitalize active:border-primary">
                {value === '' ? 'Select '+ name.replace(/([a-z])([A-Z])/g, '$1 $2'): typeof value === 'number'? getItemNameById(items, value) : value} 
            </Select.Trigger >
            <Select.Content class="w-full p-0 bg-transparent text-white {glass}">
                 {#each items as item}
                <Select.Item value={item.value} class={selectItem}>{item.name}</Select.Item>
                {/each}
                
            </Select.Content>
            
        </Select.Root>