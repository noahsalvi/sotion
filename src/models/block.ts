export default class Block {
  id: string;
  type: string;
  properties: BlockProperties;
  format: BlockFormat;
}

export interface BlockProperties {
  title: string;
  source: string;
  checked: string;
}

interface BlockFormat {
  page_icon: string;
}
