<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
</script>

<div>
  Block type: <span>{block.type}</span> unknown<br />

  <div class="json">
    {JSON.stringify(block)}
  </div>
</div>

<style>
  div {
    width: 100%;
    background: whitesmoke;
    padding: 10px;
    margin: 10px 0;
  }
  .json {
    white-space: pre-wrap;
    max-width: 100%;
    word-wrap: break-word;
  }
  span {
    color: red;
  }
</style>
