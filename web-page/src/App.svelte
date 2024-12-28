<script lang="ts">
  import CalendarView from "./lib/CalendarView.svelte"
  import NameDay from "./lib/NameDay.svelte"
</script>

<main>
  <div class="main_container">
 <CalendarView/></div>
</main>

<style>
  main {
    height:800px;
    width:480px;
    background-color: white;
    outline:black solid 10px;
  }
  .main_container {
    padding:16px; 
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
