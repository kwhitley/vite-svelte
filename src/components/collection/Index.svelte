
<script>
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import Search from './Search.svelte'

  export let collection = {}

  let items = collection.images
  let filtered

  const setFiltered = e => filtered = e.detail
</script>

<style type="scss">
  main {
    display: flex;
    flex-flow: row-reverse wrap;
    padding: 0.7em;

    & > * {
      flex: 1 100%;
    }
  }

  .grid {
    display: grid;
    grid-gap: 0.2rem;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
  }

  a {
    font-size: 2em;
    font-family: sans-serif;
    display: block;
    background: #ccc;
    position: relative;
    color: rgba(255,255,255,0.8);

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
      background-color: #eee;
    }
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0.5em;
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  input {
    display: block;
  }

  h1 {
    font-weight: 200;
    font-size: 4rem;
    letter-spacing: -0.04em;
    text-align: right;
    max-width: 50%;
    line-height: 1em;
    padding: 0.2em 0 0.5em;
  }
</style>

<main>
  <h1>{ collection.title }</h1>

  <!-- <input type="range" bind:value={maxRatio} max=2 step=0.01> { maxRatio } -->
  <Search items={items} on:search={setFiltered} />

  <div class="grid">
    {#each filtered || items as image (image)}
      <a href={`/images/${image.id}`} transition:fly={{ y: 1000, duration: 300 }} animate:flip={{ duration: 200 }}>
        <img src={`https://api.slick.af/images/${image.id}.jpg?size=small`} alt={image.title} />
        <span>{image.title || image.id}</span>
      </a>
    {/each}
  </div>
</main>
