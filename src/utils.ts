import Block from "./models/block";

export function createBlocksFromJson(json: Object) {
  const objectArray = Object.values(json);
  const rawBlocks = objectArray.map(({ value }) => {
    if (!value) return {};
    // if (value.properties) beautifyBlockProperties(value);
    return value;
  });

  const blocks: Block[] = [];

  for (let i = 0; i < objectArray.length; i++) {
    const object = rawBlocks[i];

    if (!object) continue;

    switch (object.type) {
      case "column_list": {
        nestContents(object, rawBlocks);
        break;
      }
      case "numbered_list":
      case "bulleted_list": {
        groupListItems(i, rawBlocks);
        break;
      }
    }

    blocks.push(object);
  }

  return blocks;
}

function groupListItems(index, rawBlocks: Block[]) {
  const firstListItem = rawBlocks[index];

  const firstListItemClone: Block = {} as Block;
  Object.assign(firstListItemClone, firstListItem);

  firstListItem.type = "list";
  firstListItem.content = [];
  firstListItem.content.push(firstListItemClone);

  while (rawBlocks[index + 1]?.type === firstListItemClone.type) {
    firstListItem.content.push(rawBlocks[index + 1]);
    rawBlocks[index + 1] = null;
    index++;
  }
}

function nestContents(object: { content: any[] }, rawBlocks: Block[]) {
  object.content = object.content.reduce((prev: any[], id) => {
    const referencedObject = rawBlocks.find((object, i) => {
      // console.log(object?.id);
      if (object?.id === id) {
        // console.log(!!object.content);
        if (object.content) {
          nestContents(object, rawBlocks);
        }
        if (object.type === "numbered_list") {
          groupListItems(i, rawBlocks);
        }

        // Remove object from list that gets rendered
        rawBlocks[i] = null;
        return true;
      }
    });

    if (referencedObject) prev.push(referencedObject);
    return prev;
  }, []);
}

// The Type that is returned from the API
type RawBlockProperties = { [key: string]: string[][] };

function beautifyBlockProperties(object: { properties: [] }) {
  const properties = object.properties;
  const propertiesArray = Object.entries(properties);

  propertiesArray.forEach((property) => {
    properties[property[0]] = property[1][0][0];
  });
}

export function blockToImageUrl(block: Block) {
  const url = block.properties.source[0][0];
  console.log(url);

  if (!url) return "";
  const imageUrl = new URL(
    url.startsWith("https://www.notion.so")
      ? url
      : `https://www.notion.so${
          url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`
        }`
  );

  imageUrl.searchParams.set("table", block.parent_table);
  imageUrl.searchParams.set("id", block.id);
  imageUrl.searchParams.set("cache", "v2");

  return imageUrl;
}

export function blockToVideoUrl(block: Block) {
  const url = new URL(`https://www.notion.so/video/${block.id}`);
  return url;
}
