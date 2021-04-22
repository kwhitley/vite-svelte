<script>
  const getDetails = () => fetch('https://openlibrary.org/works/OL45883W.json').then(r => r.json())

  const loading = getDetails()
</script>

<!-- STYLES -->
<style type="scss">
  main {
    display: inline-block;
    padding: 1em 2.5em 2em 2em;
    background-color: #eee;
    transition: all 0.1s ease;
    user-select: none;
    margin-bottom: 2em;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.5);
    }
  }

  p {
    font-size: 0.8em;
    text-align: left;
    columns: 2;
    column-gap: 2em;
    max-width: 40em;
  }
</style>

<!-- COMPONENT -->
{#await loading}
  <p>Loading book...</p>
{:then book}
  <main>
    <h1>{ book.title }</h1>
    <p>{ book.description }</p>
  </main>
{/await}
