<script lang="ts">
  type PassageData = {
  citation: string;
  passage: string;
  images: string[];
  version: string;
};

  import { onMount } from "svelte"
  let verseOfDay:PassageData
  let verseOfDayImage:string 
  let isLoading:boolean = true
  onMount(async()=>{
    try{
      const response = await fetch('https://calendar-af.azurewebsites.net/api/verseofday');
      if (!response.ok) {
        throw new Error('Failed to fetch nameday data');
      }
      verseOfDay = await response.json();
      console.log(verseOfDay)
      verseOfDayImage = verseOfDay.images?.[0];
      if(!verseOfDayImage){
        console.warn("No verse of the day image found")
      }
    }catch(e){
      console.log(e)
    }
   finally {
      isLoading = false;
    }
  })
</script>

{#snippet data(verseOfDay:PassageData)}
<div>
  <h3>{verseOfDay.passage}</h3>
  <h3 class="citation">{verseOfDay.citation}</h3>
</div>
{/snippet}

<div style="padding-top:12px">
  {#if isLoading}
    <p>Loading...</p>
  {:else if verseOfDayImage}
  {@render data(verseOfDay)}
  <!-- <img width="100%" height="auto" src={verseOfDayImage} alt="verse of the day"/> -->
  {:else}
  <p>Error</p>
{/if}
  
</div>

<style>
  .citation {
    text-align: right;
    color:rgb(98, 98, 98);
  }
  img {
    filter: invert(100%)
  }
</style>
