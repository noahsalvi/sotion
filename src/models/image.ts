import Block from "./block";

export default class Image extends Block {
  get source() {
    return this.properties["source"]?.[0]?.[0];
  }
}
