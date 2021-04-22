<script>
  export let count = 0

  const increment = () => count++
</script>

<!-- STYLES -->
<style lang="scss">
  main {
    display: inline-block;
    margin: 1em 0;
    font-size: 4em;
    cursor: pointer;
    transition: all 0.1s ease;
    user-select: none;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>

<!-- COMPONENT -->
<main on:click={increment}>
  { count } * 2 = { count * 2 }
</main>
