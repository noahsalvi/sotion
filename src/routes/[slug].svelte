<script context="module">
  import { Sotion, sotion } from "$lib";

  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    try {
      const { blocks } = await sotion.slugPage(params.slug);
      return { blocks, slug: params.slug };
    } catch (e) {
      return e;
    }
  }
</script>

<script>
  export let blocks;
  export let slug;
</script>

<svelte:head>
  <title>{slug}</title>
</svelte:head>

<Sotion {blocks} />
