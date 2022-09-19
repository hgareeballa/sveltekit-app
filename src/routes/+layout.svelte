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
  {#key $page}
    <div align="center" in:fly={{ y: 200, duration: 2000 }}>
      <slot />
    </div>
  {/key}

  <FooterPage />
</div>
