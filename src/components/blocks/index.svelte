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
  import List from "./List.svelte";

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
    column_list: ColumnList,
    list: List,
  };
</script>
