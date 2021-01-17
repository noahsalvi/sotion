<script lang="ts">
  import type Block from "../models/block";
  import Error from "./Error.svelte";
  import Page from "./Page.svelte";

  export let blocks: Block[];
  // $: blocks.forEach((block) => console.log(block.properties));

  function mapNotionComponent(block: Block) {
    const typeMapEntries = Object.entries(notionTypeMap);
    let componentBlock;
    typeMapEntries.find(([key, value]) => {
      console.log(key);
      if (key === block.type) componentBlock = value;
    });
    return componentBlock ?? Error;
  }

  const notionTypeMap = [{ page: Page }];
</script>

{#each blocks as block}
  <svelte:component this={mapNotionComponent(block)} {block} />
{/each}
