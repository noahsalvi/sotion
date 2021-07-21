<script lang="ts">
  import type Block from "../models/block";
  import BlockRenderer from "./BlockRenderer.svelte";

  /** This needs to be the output of sotion.fetchPage() or sotion.slugPage() */
  export let blocks: string;
  let parsedBlocks: Block[];

  $: if (blocks) {
    // Parses the json string into a object
    const rawParsedBlocks = JSON.parse(blocks) as any[];

    // Nested pages also inlcude the pages above them, this removes them.
    const duplicatePageIds: number[] = [];
    rawParsedBlocks.forEach((block, index) => {
      if (index && block.type === "page") {
        duplicatePageIds.push(index);
      }
    });

    duplicatePageIds
      .reverse()
      .forEach((index) => rawParsedBlocks.splice(index, 1));

    parsedBlocks = rawParsedBlocks;
  }
</script>

{#if parsedBlocks}
  <section class="sotion">
    {#each parsedBlocks as block}
      <BlockRenderer {block} />
    {/each}
  </section>
{:else}
  <div class="error">The given blocks are not valid</div>
{/if}

<style>
  :global(section.sotion *) {
    box-sizing: border-box;
  }

  :root {
    --sotion-column-gap: 20px;
  }

  .error {
    color: red;
  }
</style>
