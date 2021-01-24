<script lang="ts">
  import type BlockColumn from "../../models/blocks/column";

  export let block: BlockColumn;
</script>

<div class="notion-column" style="width: {block.format.column_ratio * 100}%">
  <slot />
</div>

<style>
  .notion-column {
    padding: 0 var(--notion-column-gap);
    flex-basis: auto;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: min-content;
  }
</style>
