<script>
  import Collection from './components/collection/Collection.svelte'
  import Loading from './components/Loading.svelte'
  import { collection } from './stores/collection'

  let collectionLoaded = collection.load('kevin').then(() => $collection)
</script>

<div id="app">
  {#await collectionLoaded}
    <Loading />
  {:then c}
    <Collection collection={c} />
  {/await}
</div>

<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: -0.02em;
  }

  :global * {
    padding: 0;
    margin: 0;
  }
</style>
