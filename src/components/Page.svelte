<script lang="ts">
  import type Block from "../models/block";

  export let block: Block;
</script>

{#if block.properties.title}
  <h1 class="page-title">
    {block.properties.title}
    {#if block.format.page_icon}
      <span class="page-icon">
        {block.format.page_icon}
      </span>
    {/if}
  </h1>
{/if}
