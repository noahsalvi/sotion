<script lang="ts">
  import KatexEquation from "./components/KatexEquation.svelte";
  import type BlockEquation from "../../models/blocks/equation";

  export let block: BlockEquation;

  const maths = block.properties?.title[0][0] ?? "";
</script>

<KatexEquation {maths} displayMode={true} />
