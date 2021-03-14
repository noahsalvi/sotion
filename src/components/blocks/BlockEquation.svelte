<script lang="ts">
  import Equation from "./components/Equation.svelte";
  import type BlockEquation from "../../models/blocks/equation";

  export let block: BlockEquation;

  const maths = block.properties?.title[0][0] ?? "";
</script>

<Equation {maths} displayMode={true} />
