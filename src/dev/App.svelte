<script>
  import DocumentTitle from "../lib/DocumentTitle.svelte";

  let title = "";
</script>

<style>
  main {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  h1 {
    margin-bottom: 0px;
    text-align: center;
    font-size: 24pt;
  }

  .root {
    width: 450px;
    max-width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 40px;
  }

  input {
    width: auto;
    flex: 1;
    margin-right: 15px;
    width: 100%;
    font-family: inherit;
    font-size: 18pt;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
</style>

<DocumentTitle {title}>
  <main>
    <h1>Svelte Document Title</h1>
    <div class="root">
      <input
        id="title"
        type="text"
        value={title}
        placeholder="Enter title"
        on:input={e => (title = e.target.value)} />
    </div>
  </main>
</DocumentTitle>
