import Block from "../block";

export default interface BlockList extends Block {
  content: Block[];
}
