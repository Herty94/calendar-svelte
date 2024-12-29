<script lang="ts">
  import { onMount } from "svelte"
  let verseOfDayImage:string
  onMount(async()=>{
    try{
      const response = await fetch('https://calendar-af.azurewebsites.net/api/verseofday');
      if (!response.ok) {
        throw new Error('Failed to fetch nameday data');
      }
      const data = await response.json();
      verseOfDayImage = data.images?.[0];
    }catch(e){
      console.log(e)
    }
  })
</script>

<div style="padding-top:12px">
  {#if verseOfDayImage}
  <img width="100%" height="auto" src={verseOfDayImage} alt="verse of the day"/>
{:else}
  <p>Error</p>
{/if}
  
</div>

<style>
  img {
    filter: invert(100%)
  }
</style>
