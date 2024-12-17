<script lang="ts">
  import { onMount } from 'svelte'
  let namedayData:string;

  onMount(async()=>{
    try{
      const response = await fetch('https://nameday.abalin.net/api/V1/today?country=sk');
      if (!response.ok) {
        throw new Error('Failed to fetch nameday data');
      }
      const data = await response.json();
      namedayData = data.nameday?.sk;
    }catch(e){
      console.log(e)
    }
  })
  
</script>

<div>
  {#if namedayData}
  <h2>{namedayData}</h2>
{:else}
  <p>Error</p>
{/if}
</div>