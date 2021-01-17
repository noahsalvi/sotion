<script context="module">
  import notion from "../../../src/notion";
  import Notion from "../../../src/components/Notion.svelte";

  export async function preload() {
    const blocks = await notion.fetchPage(
      "1d9bce53df574dd1841a34e32ad94c54",
      this
    );

    return { blocks };
  }
</script>

<script>
  export let blocks;
</script>

<Notion {blocks} />

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
