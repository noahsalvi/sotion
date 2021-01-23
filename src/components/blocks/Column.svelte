<div class="notion-column">
  <slot />
</div>

<style>
  .notion-column {
    margin-right: 20px;
    flex: 1;
    height: 100%;
  }

  :global(.notion-column img) {
    width: 100%;
  }
</style>
