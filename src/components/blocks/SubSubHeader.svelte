<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title;
</script>

<h3 class="notion-subsubheader">{title}</h3>
