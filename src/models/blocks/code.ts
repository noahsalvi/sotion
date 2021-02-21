import Block, { BlockProperties } from "../block";

export default interface BlockCode extends Omit<Block, "properties"> {
  properties: BlockCodeProperties;
}

interface BlockCodeProperties extends Omit<BlockProperties, "title"> {
  title: string[][];
  language: string[][];
}
