<script lang="ts">
  import type Block from "../../models/block";
  import FormattedText from "./components/FormattedText.svelte";

  export let block: Block;
  const isNumbered = block.content[0].type === "numbered_list";

  function getTitle(block: Block) {
    return block.properties?.title ?? "";
  }
</script>

{#if isNumbered}
  <ol class="sotion-numbered-list">
    {#each block.content as listItem}
      <li><FormattedText text={getTitle(listItem)} /></li>
    {/each}
  </ol>
{:else}
  <ul class="sotion-bulleted-list">
    {#each block.content as listItem}
      <li><FormattedText text={getTitle(listItem)} /></li>
    {/each}
  </ul>
{/if}

<style>
  .sotion-numbered-list,
  .sotion-bulleted-list {
    margin: 0;
    padding-left: 20px;
  }
</style>
