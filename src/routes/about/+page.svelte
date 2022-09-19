<script>
  import { count } from "$lib/store.js";

  // function increment() {
  //   count.update((n) => n + 1);
  // }
  // function reset() {
  //   count.set(0);
  // }
  export let data;
  let { x } = data;
  let me = "test me";
</script>

<h1>About Page</h1>

<p>{me} {$count}</p>

<button on:click={count.increment}> + </button>
<button on:click={count.reset}> reset </button>
<button on:click={() => count.meme("fffff")}> Meme click </button>
