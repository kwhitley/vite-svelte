<script>
  export let count = 0

  const increment = () => count++
</script>

<main on:click={increment}>
  { count }
</main>

<p>description goes here</p>


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
