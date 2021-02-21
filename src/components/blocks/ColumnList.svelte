<section class="sotion-column-list">
  <slot />
</section>

<style>
  .sotion-column-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 calc(var(--sotion-column-gap) * -1);
  }
</style>
