import { createBlocksFromJson } from "./utils";

class Notion {
  private scopeId = "";
  scope = [];

  get isScopeUpdated() {
    return this.scope.includes(this.scopeId);
  }

  setScope(id: string) {
    this.scopeId = id;
  }

  async fetchPage(id, context) {
    const res: Response = await context.fetch(
      `https://notion-api.splitbee.io/v1/page/${id}`
    );
    const rawBlocks = await res.json();
    const blocks = createBlocksFromJson(rawBlocks);

    return JSON.stringify(blocks);
  }

  async slugPage(slug, context) {
    if (!this.isScopeUpdated) {
      await this.loadScope(context);
    }

    const id = await this.getIdFromSlug(slug);

    const res = await context.fetch(
      `https://notion-api.splitbee.io/v1/page/${id}`
    );
    const rawBlocks = await res.json();
    const blocks = JSON.stringify(createBlocksFromJson(rawBlocks));
    const meta = this.scope.find((col) => col.id === id);
    return { blocks, meta };
  }

  async slugTable(slug, context) {
    if (!this.isScopeUpdated) {
      await this.loadScope(context);
    }

    const id = await this.getIdFromSlug(slug);

    const res = await context.fetch(
      `https://notion-api.splitbee.io/v1/table/${id}`
    );
    const json = await res.json();

    return json;
  }

  async getIdFromSlug(slug) {
    const id = this.scope.filter((col) => col.slug === slug)[0].id;
    return id;
  }

  async loadScope(context) {
    const res = await context.fetch(
      `https://notion-api.splitbee.io/v1/table/${this.scopeId}`
    );

    this.scope = await res.json();
  }
}
const notion = new Notion();
export default notion;
