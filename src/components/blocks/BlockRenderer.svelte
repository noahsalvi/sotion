<script lang="ts">
  import type Block from "../../models/block";
  import { blockTypeComponentMap } from "./index.svelte";
  export let block: Block;

  function mapNotionComponent(block: Block) {
    const componentBlock = blockTypeComponentMap[block.type];
    return componentBlock ?? Error;
  }
</script>

<svelte:component this={mapNotionComponent(block)} {block} />
