<script>
  import Index from './Index.svelte'
  import Reader from './Reader.svelte'

  export let collection

  $: console.log({ collection })
</script>

<style type="scss">
  main {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-x: hidden;
    // transform: scale(0.5);
  }
</style>

<main>
  <Index collection={collection.details} />
  <Reader details={collection.pages} />
</main>
