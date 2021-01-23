<script lang="ts">
  import type Block from "../models/block";
  import BlockRenderer from "./blocks/BlockRenderer.svelte";

  /** This needs to be the output of notion.fetchPage() or notion.slugPage() */
  export let blocks: string;
  const parsedBlocks: Block[] = JSON.parse(blocks);
</script>

<section class="notion">
  {#each parsedBlocks as block}
    <BlockRenderer {block} />
  {/each}
</section>
