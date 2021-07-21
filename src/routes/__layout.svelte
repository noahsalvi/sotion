<script context="module" lang="ts">
  import { sotion } from "$lib";

  export async function load({ fetch }) {
    console.log("test");
    console.log(fetch("test"));
    sotion.setScope("765b1258c01c4c8caae4120790e4805a").setFetch(fetch);
  }
</script>

<script lang="ts">
  export let segment: string;
  segment;
</script>

<div>
  <slot />
</div>

<style>
  div {
    padding: 0 40px;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
