import { createBlocksFromJson } from "./utils";

const apiUrl = "https://notion-api.splitbee.io/v1/";

let fetcher;
if (typeof fetch !== "undefined") fetcher = fetch;

function throwIfNoFetcherSet() {
  if (!fetcher) {
    throw "Sotion: Since you are in SRS mode, set a fetch function with: `notion.setFetch`";
  }
}
class Sotion {
  private _scopeId = "";
  private scope = [];

  get scopeId() {
    return this._scopeId;
  }

  /** If the scope array has already loaded the set `scopeId` */
  private get isScopeUpdated() {
    return this.scope.includes(this._scopeId);
  }

  async getScope() {
    if (this.isScopeUpdated) return this.scope;

    throwIfNoFetcherSet();
    const res: Response = await fetcher(`${apiUrl}table/${this._scopeId}`);
    this.scope = await res.json();
    return this.scope;
  }

  async fetchPage(id: string) {
    throwIfNoFetcherSet();

    const res: Response = await fetcher(`${apiUrl}page/${id}`);
    const rawBlocks = await res.json();
    const blocks = createBlocksFromJson(rawBlocks);

    return JSON.stringify(blocks);
  }

  async fetchTable(id: string) {
    throwIfNoFetcherSet();

    const res: Response = await fetcher(`${apiUrl}table/${id}`);
    const json = await res.json();

    return json;
  }

  async slugPage(slug: string) {
    await this.getScope();

    const id = await this.getIdFromSlug(slug);

    const res: Response = await fetcher(`${apiUrl}page/${id}`);
    const rawBlocks = await res.json();
    const blocks = JSON.stringify(createBlocksFromJson(rawBlocks));

    const meta = this.scope.find((col) => col.id === id);
    return { blocks, meta };
  }

  async slugTable(slug: string) {
    await this.getScope();

    const id = await this.getIdFromSlug(slug);

    const res: Response = await fetcher(`${apiUrl}table/${id}`);
    const json = await res.json();

    return json;
  }

  setScope(id: string) {
    this._scopeId = id;
    return this;
  }

  /** If you are using sotion in SRS mode, e.g. via Sapper
   *
   *  You can pass the this.fetch function to sotion.
   *
   *  `sotion.setFetch(this.fetch);`
   */
  setFetch(fetch: any) {
    fetcher = fetch;
    return this;
  }

  private async getIdFromSlug(slug) {
    let id: string;
    try {
      id = this.scope.filter((col) => col.slug === slug)[0].id;
    } catch (e) {
      throw (
        "Sotion: slug '" + slug + "' not found in scope '" + this._scopeId + "'"
      );
    }

    return id;
  }
}

export default new Sotion();
