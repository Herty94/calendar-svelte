<script lang="ts">
  import NameDay from './NameDay.svelte'
  import dayjs from 'dayjs'
  import 'dayjs/locale/sk'
  const date = dayjs().locale('sk')

  let weekDay = date.format('dddd').toUpperCase()
  let monthName = date.format('MMMM').toUpperCase()
  let year = date.format('YYYY')
  let monthDay = date.format('D')
  let daysOfMonth = date.daysInMonth()
</script>

<div>
  <div class="horizontal">
    <h2>{monthName}</h2>
    <h2>{year}</h2>
  </div>
  <div class="line"></div>
  <div class="container">
    <h1>{monthDay}</h1>
    <NameDay />
  </div>
  <div class="horizontal">
    <h2>{monthDay}/{daysOfMonth}</h2>
    <h2>{weekDay}</h2>
  </div>
  <div class="line"></div>
</div>

<style>
  h1 {
    line-height: 80%;
  }
  .line {
    background-color: black;
    height: 2px;
    width: 100%;
  }
  .horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }
  .tomorrow {
    color: rgba(0, 0, 0, 0.54);
  }
</style>
