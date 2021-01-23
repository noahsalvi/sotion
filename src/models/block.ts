export default interface Block {
  id: string;
  type: string;
  properties: BlockProperties;
  format: {};
  content: Block[];
  parent_table: string;
}

export interface BlockProperties {
  title: string;
  source: string;
  checked: string;
}
