<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title ?? "";
  const checked = !!block.properties?.checked;
</script>

<div>
  <input type="checkbox" {checked} on:click|preventDefault />
  {title}
</div>
