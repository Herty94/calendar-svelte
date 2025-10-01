<script lang="ts">
  import { onMount } from 'svelte'
  let namedayData: string
  let tomorrowData: string
  onMount(async () => {
    const today = new Date()
    const tomorrow = new Date(Date.now() + 86400000)
    try {
      const response = await fetch(
        `https://nameday.abalin.net/api/V2/date?day=${today.getDate()}&month=${today.getMonth() + 1}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch nameday data')
      }

      if (!response.ok) {
        throw new Error('Failed to fetch nameday data')
      }
      const data = await response.json()
      namedayData = data.data.sk
    } catch (e) {
      console.log(e)
    }
    try {
      const tomorrowResponse = await fetch(
        `https://nameday.abalin.net/api/V2/date?day=${tomorrow.getDate()}&month=${tomorrow.getMonth() + 1}`
      )
      const tomorrowDataJson = await tomorrowResponse.json()
      tomorrowData = tomorrowDataJson.data.sk
    } catch (e) {
      console.log(e)
    }
  })
</script>

<div class="container">
  {#if namedayData}
    <h2>{namedayData.toUpperCase()}</h2>
  {:else}
    <p>Error</p>
  {/if}
  {#if tomorrowData}
    <h2 class="tomorrow">{tomorrowData.toUpperCase()}</h2>
  {:else}
    <p class="tomorrow">Error</p>
  {/if}
</div>
