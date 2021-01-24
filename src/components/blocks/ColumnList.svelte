<section class="notion-column-list">
  <slot />
</section>

<style>
  .notion-column-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 calc(var(--notion-column-gap) * -1);
  }
</style>
