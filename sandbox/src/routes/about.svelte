<script context="module">
  import notion from "../../../src/notion";
  import Notion from "../../../src/components/Notion.svelte";

  export async function preload() {
    // const blocks = await notion.fetchPage(
    //   "1d9bce53df574dd1841a34e32ad94c54",
    //   this
    // );
    return await notion.slugPage("about", this);
  }
</script>

<script>
  export let blocks;
  export let meta;
</script>

{JSON.stringify(meta)}
<Notion {blocks} />
