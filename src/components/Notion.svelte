<script lang="ts">
  import type Block from "../models/block";
  import BlockRenderer from "./blocks/BlockRenderer.svelte";

  /** This needs to be the output of notion.fetchPage() or notion.slugPage() */
  export let blocks: string;

  let parsedBlocks: Block[] = blocks && JSON.parse(blocks);
</script>

{#if parsedBlocks}
  <section class="notion">
    {#each parsedBlocks as block}
      <BlockRenderer {block} />
    {/each}
  </section>
{:else}
  <div class="error">The given blocks are not valid</div>
{/if}

<style>
  :global(section.notion *) {
    box-sizing: border-box;
  }

  :root {
    --notion-column-gap: 20px;
  }

  .error {
    color: red;
  }
</style>
