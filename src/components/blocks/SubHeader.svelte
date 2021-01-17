<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title;
</script>

<h2 class="notion-subheader">{title}</h2>
