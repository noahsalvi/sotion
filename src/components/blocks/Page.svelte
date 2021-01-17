<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const pageIcon = block.format?.page_icon;
</script>

{#if block.properties.title}
  <h1 class="page-title">
    {block.properties.title}
    {#if pageIcon}
      <span class="page-icon">
        {pageIcon}
      </span>
    {/if}
  </h1>
{/if}
