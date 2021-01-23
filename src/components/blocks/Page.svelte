<script lang="ts">
  import type BlockPage from "../../models/blocks/page";
  import FormattedText from "../subBlocks/FormattedText.svelte";

  export let block: BlockPage;
  const pageIcon = block.format?.page_icon;
</script>

{#if block.properties.title}
  <h1 class="page-title">
    <FormattedText text={block.properties.title} />
    {#if pageIcon}
      <span class="page-icon">
        {pageIcon}
      </span>
    {/if}
  </h1>
{/if}
