<script lang="ts">
  import { onMount } from 'svelte'
  import * as YouVersion from "@glowstudent/youversion"
  let content:{
    citation: string;
    passage: any;
    images: String[];
    version: any;
    image?: undefined;
} | {
    citation: String;
    passage: String;
    image: String[];
    version: undefined;
    images?: undefined;
} | undefined = undefined
  onMount(async()=>{
    try{

      content = await YouVersion.getVerseOfTheDay('sk');
    }catch(e){
      console.log(e)
    }
  })
  
</script>

<div class="container">
  {#if content}
  <h2>{JSON.stringify(content)}</h2>
{:else}
  <p>Error</p>
{/if}
</div>
