<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let search
  let el

  export let items

  $: {
    let newItems = items.filter(image => {
      if (image.title && image.title.includes(search)) return true
      if (image.keywords && image.keywords.join(',').includes(search)) return true
      return false
    })

    dispatch('search', newItems)
  }
</script>

<style type="scss">
  input {
    flex: 1 100%;
    font-size: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.3em;
    margin-bottom: 0.5em;
    padding: 0.3em;
    outline: none;

    &::placeholder {
      color: #ddd;
    }
  }
</style>

<input
  placeholder="Search for some stuff..."
  type="text"
  bind:value={search}
  bind:this={el}
  >

<svelte:window on:keydown={e => el.focus()}/>
