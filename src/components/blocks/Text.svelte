<script lang="ts">
  import type Block from "../../models/block";

  export let block: Block;
  const title = block.properties?.title ?? "";
</script>

<p class="notion-text">{title}</p>
