import Block from "../block";

export default interface BlockColumn extends Block {
  format: { column_ratio: number };
}
