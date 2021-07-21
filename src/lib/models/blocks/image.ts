import Block, { BlockProperties } from "../block";

export default interface BlockImage extends Block {
  format: {
    block_width: boolean;
    block_height: boolean;
    block_full_width: boolean;
    block_page_width: boolean;
  };
  properties: BlockImageProperties;
}

interface BlockImageProperties extends BlockProperties {
  caption: string;
}
