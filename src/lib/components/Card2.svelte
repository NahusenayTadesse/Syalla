<script lang="ts">
	import { glass } from "$lib/global.svelte";

    let { title, content, image }: {title: string, content: string, image: string} = $props();
</script>

<div class="{glass} rounded-[16px] flex flex-col gap-4 justify-center p-8 items-start">
<img src={image} alt="Card Illustration">

  <h6>{title}</h6>
  <p class="text-gray-1">{content}</p>
</div>