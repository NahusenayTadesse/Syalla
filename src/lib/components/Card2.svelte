<script lang="ts">
	import { glass } from "$lib/global.svelte";

    let { title, content, image }: {title: string, content: string, image: string} = $props();
</script>

<div class="{glass} w-full h-full rounded-2xl flex flex-col gap-8 justify-center p-8 items-center">
<img src={image} alt="Card Illustration" >

  <h6>{title}</h6>
  <p class="text-gray-1 lg:w-sm w-full text-center">{content}</p>
</div>