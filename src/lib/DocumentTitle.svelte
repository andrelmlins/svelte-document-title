<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let title;

  let initialTitle;

  $: {
    if (title) {
      document.title = title;
    } else {
      if (initialTitle) document.title = initialTitle;
    }
  }

  onMount(() => {
    initialTitle = document.title;
  });
</script>

<slot />
