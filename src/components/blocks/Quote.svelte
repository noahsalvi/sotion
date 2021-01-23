<script lang="ts">
  import type Block from "../../models/block";
  import FormattedText from "../subBlocks/FormattedText.svelte";

  export let block: Block;
  const title = block.properties?.title ?? "";
</script>

<blockquote class="notion-quote"><FormattedText text={title} /></blockquote>

<style>
  .notion-quote {
    margin: 0;
    box-sizing: border-box;
    margin-left: 0;
    border-left: 3px solid black;
    padding: 5px 20px;

    background: whitesmoke;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    align-items: center;
  }
</style>
