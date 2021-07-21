import Block from "../block";

export default interface BlockCode extends Omit<Block, "properties"> {
  properties: BlockEquationProperties;
}

interface BlockEquationProperties {
  title: string[][];
}
