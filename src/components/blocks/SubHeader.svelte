<script lang="ts">
  import type Block from "../../models/block";
  import FormattedText from "../subBlocks/FormattedText.svelte";

  export let block: Block;
  const title = block.properties?.title;
</script>

<h2 class="sotion-subheader">
  <FormattedText text={title} />
</h2>
