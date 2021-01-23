<script lang="ts">
  import type BlockImage from "../../models/blocks/image";
  import { blockToImageUrl } from "../../utils";
  import FormattedText from "../subBlocks/FormattedText.svelte";

  export let block: BlockImage;

  const imageUrl = blockToImageUrl(block);
  const caption = block?.properties?.caption;

  // To adjust fullWidth cases where the image/figure is given the whole width (100vw)
  let fullWidthImageHeight: number;
</script>

<slot />
{#if caption}
  <figure
    class="notion-figure"
    class:full-width={block.format.block_full_width}
    bind:clientHeight={fullWidthImageHeight}
  >
    <img
      src={imageUrl.toString()}
      class="notion-image"
      alt="notion"
      width="{block.format.block_width}px"
    />
    <figcaption class="notion-figure-caption">
      <FormattedText text={caption} />
    </figcaption>
  </figure>
  {#if block.format.block_full_width}
    <div
      class="notion-figure-placeholder"
      style="height: {fullWidthImageHeight}px"
    />
  {/if}
{:else}
  <div
    bind:clientHeight={fullWidthImageHeight}
    class:full-width={block.format.block_full_width}
  >
    <img
      src={imageUrl.toString()}
      class="notion-image"
      width="{block.format.block_width}px"
      alt="notion"
    />
  </div>
  {#if block.format.block_full_width}
    <div
      class="notion-image-placeholder"
      style="height: {fullWidthImageHeight}px"
    />
  {/if}
{/if}

<style>
  img {
    max-width: 100%;
  }
  .notion-figure {
    margin: 0;
    margin-bottom: 20px;
  }

  .full-width img {
    width: 100%;
  }

  .notion-figure-caption {
    font-style: italic;
  }

  :not(.notion-figure) .notion-image {
    margin-bottom: 20px;
  }

  .full-width {
    max-width: 100%;
    width: 100vw !important;
    position: absolute;
    left: 0;
  }
</style>
