import Block from "../block";

export default interface BlockPage extends Block {
  format: {
    page_icon: string;
    page_cover: string;
    page_cover_position: number;
  };
}
