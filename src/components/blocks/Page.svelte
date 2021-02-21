<script lang="ts">
  import type BlockPage from "../../models/blocks/page";
  import { getPageCoverUrl, getPageIconImageUrl } from "../../utils";
  import FormattedText from "./components/FormattedText.svelte";

  export let block: BlockPage;
  const pageTitle = block.properties?.title;
  const pageIcon = block.format?.page_icon;
  const pageCover = block.format?.page_cover;
  const pageCoverPosition = block.format?.page_cover_position * 100;
  const pageIconImage = pageIcon?.startsWith("http")
    ? getPageIconImageUrl(block)
    : null;
</script>

<div class="page-header">
  {#if pageCover}
    <div
      class="page-cover"
      style="background-image: 
      url({getPageCoverUrl(
        pageCover
      )});
       background-position-y: calc(100% - {pageCoverPosition}%)"
    />
    <div class="page-cover-placeholder" />
  {:else}
    <div class="no-page-cover-spacer" />
  {/if}
  {#if pageIcon}
    {#if pageIconImage}
      <img
        src={getPageIconImageUrl(block).toString()}
        class="page-icon-image"
        alt="test"
      />
    {:else}
      <span class="page-icon">
        {pageIcon}
      </span>
    {/if}
  {/if}

  {#if pageTitle}
    <h1 class="page-title">
      <FormattedText text={pageTitle} />
    </h1>
  {/if}
</div>

<style>
  .page-icon {
    font-size: 70px;
  }

  .page-icon-image {
    height: 90px;
    margin-bottom: 30px;
  }

  .page-cover {
    z-index: -1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 100vw;
    max-width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }

  .page-cover-placeholder {
    height: 250px;
  }

  .no-page-cover-spacer {
    height: 50px;
  }
</style>
