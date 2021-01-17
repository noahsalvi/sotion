<script lang="ts">
  import type Block from "../models/block";

  export let block: Block;
</script>

<div>
  Block type: <span>{block.type}</span> unknown
</div>

<style>
  div {
    background: whitesmoke;
    padding: 10px;
    margin: 10px 0;
  }
  span {
    color: red;
  }
</style>
