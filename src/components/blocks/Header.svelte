<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title;
</script>

<h1 class="notion-header">{title}</h1>
