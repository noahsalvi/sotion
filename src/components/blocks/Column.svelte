<script lang="ts">
  import type BlockColumn from "../../models/blocks/column";

  export let block: BlockColumn;

  const smallestColumnSize = 250;

  let clientWidth: number;
  let minWidth = "min-content";

  $: if (clientWidth <= smallestColumnSize) {
    minWidth = smallestColumnSize + "px";
  }

  $: columnWidthPercentage = block.format.column_ratio * 100;
</script>

<div
  class="sotion-column"
  style="width: {columnWidthPercentage}%; min-width: {minWidth}"
  bind:clientWidth
>
  <slot />
</div>

<style>
  .sotion-column {
    padding: 0 var(--sotion-column-gap);
    flex-basis: auto;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>
