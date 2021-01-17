<script lang="ts">
  import type Block from "../models/block";
  import {
    Page,
    Text,
    Error,
    SubHeader,
    SubSubHeader,
    Header,
    CollectionViewPage,
  } from "./blocks";
  import Image from "./blocks/Image.svelte";
  import Quote from "./blocks/Quote.svelte";
  import ToDo from "./blocks/ToDo.svelte";

  const blockTypeComponentMap = {
    page: Page,
    error: Error,
    text: Text,
    header: Header,
    sub_header: SubHeader,
    sub_sub_header: SubSubHeader,
    to_do: ToDo,
    image: Image,
    quote: Quote,
    collection_view_page: CollectionViewPage,
  };

  export let blocks: Block[];

  function mapNotionComponent(block: Block) {
    const componentBlock = blockTypeComponentMap[block.type];

    return componentBlock ?? Error;
  }
</script>

{#each blocks as block}
  <svelte:component this={mapNotionComponent(block)} {block} />
{/each}
