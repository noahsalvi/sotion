export default class Block {
  id: string;
  type: string;
  properties: BlockProperties;
  format: BlockFormat;
  parent_table: string;
}

export interface BlockProperties {
  title: string;
  source: string;
  checked: string;
}

interface BlockFormat {
  page_icon: string;
}
