<script context="module">
  import Page from "./Page.svelte";
  import Error from "./Error.svelte";
  import Text from "./Text.svelte";
  import Header from "./Header.svelte";
  import SubHeader from "./SubHeader.svelte";
  import SubSubHeader from "./SubSubHeader.svelte";
  import ToDo from "./ToDo.svelte";
  import Image from "./Image.svelte";
  import Quote from "./Quote.svelte";
  import CollectionViewPage from "./CollectionViewPage.svelte";
  import ColumnList from "./ColumnList.svelte";
  import List from "../subBlocks/List.svelte";
  import Column from "./Column.svelte";
  import Divider from "./Divider.svelte";
  import Code from "./Code.svelte";

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
  import type Block from "../../models/block";

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
