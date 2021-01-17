<script context="module">
  export async function preload() {
    notion.scopeId = "ae6b5c6a74d048f0b646dad06ba319d8";
  }
</script>

<script lang="ts">
  import { notion } from "../../../src";

  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
