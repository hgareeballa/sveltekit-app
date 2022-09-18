<script>
  import FooterPage from "./footer/+page.svelte";
  import { page } from "$app/stores";
  $: current = $page.url.pathname;
  $: console.log("page", $page.url.pathname);
</script>

<div class="container">
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal">Svelte App</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 {current == '/' ? 'btn-primary' : 'text-dark'}" href="/"
        >Home</a
      >
      <a
        class="p-2 {current == '/about' ? 'btn-primary' : 'text-dark'}"
        href="/about">About</a
      >
      <a
        class="p-2 {current == '/support' ? 'btn-primary' : 'text-dark'}"
        href="/support">Support</a
      >
      <a
        class="p-2 {current == '/pricing' ? 'btn-primary' : 'text-dark'}"
        href="/pricing">Pricing</a
      >
      <a
        class="p-2 {current == '/sign-up' ? 'btn-primary' : 'text-dark'}"
        href="/sign-up">Sign up</a
      >
    </nav>
  </div>

  <div align="center">
    <slot />
  </div>

  <FooterPage />
</div>
