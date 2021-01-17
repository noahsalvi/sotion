<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title ?? "";
</script>

<blockquote class="notion-quote">{title}</blockquote>

<style>
  .notion-quote {
    box-sizing: border-box;
    margin-left: 0;
    border-left: 3px solid black;
    padding: 5px 0;
    padding-left: 20px;

    display: flex;
    align-items: center;
  }
</style>
