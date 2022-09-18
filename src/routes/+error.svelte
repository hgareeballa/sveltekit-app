<script>
  import { page } from "$app/stores";
</script>

<h1>Page not found</h1>
<h1>{$page.status}: {$page.error.message}</h1>
