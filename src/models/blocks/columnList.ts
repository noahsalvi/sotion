import Block from "../block";

export default interface BlockColumnList extends Block {
  content: BlockColumnList[];
}
