import Block, { BlockProperties } from "../block";

export default interface BlockVideo extends Block {
  properties: BlockVideoProperties;
  format: BlockVideoFormat;
}

interface BlockVideoFormat {
  block_width: number;
  display_source: string;
  block_full_width: boolean;
  block_page_width: boolean;
  block_preserve_scale: boolean;
}

interface BlockVideoProperties extends BlockProperties {
  caption: string;
}
