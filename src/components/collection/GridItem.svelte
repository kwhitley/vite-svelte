<script>
  import { fly } from 'svelte/transition'

  export let image

  $: title = image.title || image.id
</script>

<style type="scss">
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
</style>

<a href={`/images/${image.id}`} transition:fly={{ y: 1000 }}>
  <img src={`https://api.slick.af/images/${image.id}.jpg?size=small`} alt={title} />
  <span>{title}</span>
</a>
