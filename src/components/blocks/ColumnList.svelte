<section class="notion-column-list">
  <slot />
</section>

<style>
  .notion-column-list {
    display: flex;
    justify-content: space-between;
  }

  :global(.notion-column-list :last-child) {
    margin-right: 0;
  }
</style>
