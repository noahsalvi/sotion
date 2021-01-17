<script lang="ts">
  import type Block from "../../models/block";
  import { blockToImageUrl } from "../../utils";

  export let block: Block;
  const title = block.properties?.title ?? "";
  const checked = !!block.properties?.checked;

  const imageUrl = blockToImageUrl(block);
</script>

<img class="notion-image" src={imageUrl.toString()} alt="notion" />
