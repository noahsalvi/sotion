<script context="module">
  import { sotion } from "$lib";

  export async function load() {
    console.log("here");
    const meta = await sotion.getScope();
    return { props: { meta } };
  }
</script>

<script lang="ts">
  export let meta: Object;
  const slugArray = Object.values(meta);
</script>

<svelte:head>
  <title>Sotion Demo</title>
</svelte:head>

<img height="200px" src="/sotion.png" alt="Sotion Logo" />

<h1>Sapper Sotion Demo!</h1>
<div class="sites">
  {#each slugArray as slug}
    <a href={slug.slug}>{slug.name}</a>
  {/each}
</div>

<br />
<br />
<br />

Source:
<a href="https://www.notion.so/{sotion.scopeId}">
  https://www.notion.so/{sotion.scopeId}
</a>

<style>
  img {
    margin: 0 auto;
  }
  h1 {
    margin-top: 50px;
  }
  .sites {
    display: flex;
    flex-wrap: wrap;
  }

  .sites a {
    flex-grow: 1;
    flex-basis: 0;
    min-width: 150px;
    background: rgb(50, 50, 50);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    padding: 15px 8px;
    border-radius: 5px;
    text-decoration: 0;
    margin-right: 5px;
  }

  .sites a:hover {
    background-color: rgb(67, 67, 67);
  }

  .sites a :last-child {
    margin-right: 0;
  }
</style>
