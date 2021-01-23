<section class="notion-column-list">
  <slot />
</section>

<style>
  .notion-column-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
  }

  .notion-column-list :last-child {
    margin-right: 0;
  }

  :global(.notion-column img) {
    max-height: 100%;
    max-width: 100% !important;
  }
</style>
