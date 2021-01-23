<script lang="ts">
  import type BlockColumnList from "../../models/blocks/columnList";
  import BlockRenderer from "./BlockRenderer.svelte";

  export let block: BlockColumnList;
</script>

<section class="notion-column-list">
  {#each block.content as column}
    <div class="notion-column">
      {#each column.content as content}
        <BlockRenderer block={content} />
      {/each}
    </div>
  {/each}
</section>

<style>
  .notion-column-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
  }

  .notion-column {
    margin-right: 20px;
  }
  .notion-column-list :last-child {
    margin-right: 0;
  }

  :global(.notion-column img) {
    max-height: 100%;
    max-width: 100% !important;
  }
</style>
