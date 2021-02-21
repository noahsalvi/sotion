<script lang="ts">
  import type BlockCode from "../../models/blocks/code";
  import Prism from "prismjs";

  export let block: BlockCode;

  const code = block.properties?.title[0][0] ?? "";
  const lang = block.properties?.language[0][0].toLowerCase() ?? "";

  const html = Prism.highlight(code, Prism.languages[lang], lang);
</script>

<pre
  class="language-{lang}">
    <code class="language-{lang}">{@html html}</code>
</pre>
