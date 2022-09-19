<script>
  import { fade, fly } from "svelte/transition";
  import FooterPage from "./footer/+page.svelte";
  import HeaderPage from "./header/+page.svelte";
  import { page } from "$app/stores";
  $: current = $page.url.pathname;
  $: console.log("page", $page.url.pathname);
</script>

<div class="container">
  <HeaderPage {current} />
  <div id="page-container">
    <div id="content-wrap">
      {#key $page}
        <div align="center" in:fly={{ y: 200, duration: 2000 }}>
          <slot />
        </div>
      {/key}
    </div>
    <footer id="footer">
      <FooterPage />
    </footer>
  </div>
</div>

<style>
  #page-container {
    position: relative;
    min-height: 75vh;
  }

  #content-wrap {
    padding-bottom: 2.5rem; /* Footer height */
  }

  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem; /* Footer height */
  }
</style>
