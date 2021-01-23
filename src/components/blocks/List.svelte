<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const isNumbered = block.content[0].type === "numbered_list";

  function getTitle(block: Block) {
    return block.properties?.title ?? "";
  }
</script>

{#if isNumbered}
  <ol class="notion-numbered-list">
    {#each block.content as listItem}
      <li>{getTitle(listItem)}</li>
    {/each}
  </ol>
{:else}
  <ul class="notion-bulleted-list">
    {#each block.content as listItem}
      <li>{getTitle(listItem)}</li>
    {/each}
  </ul>
{/if}

<style>
  .notion-numbered-list,
  .notion-bulleted-list {
    margin: 0;
    padding-left: 20px;
  }
</style>
