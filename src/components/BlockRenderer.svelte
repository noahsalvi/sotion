<script context="module">
  import Page from "./blocks/Page.svelte";
  import Error from "./blocks/Error.svelte";
  import Text from "./blocks/Text.svelte";
  import Header from "./blocks/Header.svelte";
  import SubHeader from "./blocks/SubHeader.svelte";
  import SubSubHeader from "./blocks/SubSubHeader.svelte";
  import ToDo from "./blocks/ToDo.svelte";
  import Image from "./blocks/Image.svelte";
  import Quote from "./blocks/Quote.svelte";
  import CollectionViewPage from "./blocks/CollectionViewPage.svelte";
  import ColumnList from "./blocks/ColumnList.svelte";
  import List from "./blocks/List.svelte";
  import Column from "./blocks/Column.svelte";
  import Divider from "./blocks/Divider.svelte";
  import Code from "./blocks/Code.svelte";

  export const blockTypeComponentMap = {
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
    list: List,
    column_list: ColumnList,
    column: Column,
    divider: Divider,
    code: Code,
  };
</script>

<script lang="ts">
  import type Block from "../models/block";

  export let block: Block;

  function mapNotionComponent(block: Block) {
    const componentBlock = blockTypeComponentMap[block.type];
    return componentBlock ?? Error;
  }
</script>

{#if block.type === "column_list"}
  <ColumnList>
    {#each block.content as column}
      <Column block={column}>
        {#each column.content as columnContent}
          <svelte:self block={columnContent} />
        {/each}
      </Column>
    {/each}
  </ColumnList>
{:else}
  <svelte:component this={mapNotionComponent(block)} {block} />
{/if}
