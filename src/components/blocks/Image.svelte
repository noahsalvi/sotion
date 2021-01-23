<script lang="ts">
  import type BlockImage from "../../models/blocks/image";
  import { blockToImageUrl } from "../../utils";
  import FormattedText from "../subBlocks/FormattedText.svelte";

  export let block: BlockImage;

  const imageUrl = blockToImageUrl(block);
  const caption = block?.properties?.caption;
</script>

<slot />

{#if caption}
  <figure class="notion-figure">
    <img
      src={imageUrl.toString()}
      class="notion-image"
      class:full-width={block.format.block_full_width}
      alt="notion"
    />
    <figcaption class="notion-figure-caption">
      <FormattedText text={caption} />
    </figcaption>
  </figure>
{:else}
  <img
    src={imageUrl.toString()}
    class="notion-image"
    width="{block.format.block_width}px"
    class:full-width={block.format.block_full_width}
    alt="notion"
  />
{/if}

<style>
  img {
    max-width: 100%;
  }
  .notion-figure {
    margin: 0;
    margin-bottom: 20px;
  }

  .notion-figure-caption {
    font-style: italic;
  }

  :not(.notion-figure) .notion-image {
    margin-bottom: 20px;
  }

  .notion-image.full-width {
    width: 100%;
  }
</style>
