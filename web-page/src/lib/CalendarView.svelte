 <script lang="ts">
  import NameDay from "./NameDay.svelte"
  import dayjs from "dayjs"
  import "dayjs/locale/sk"
  const date = dayjs().locale('sk')

  let weekDay = date.format("dddd")
  let monthName = date.format("MMMM")
  let year = date.format("YYYY")
  let monthDay = date.format("D")
  let daysOfMonth= date.daysInMonth()
 </script>

 <div>
  <h2>{monthName.toUpperCase()}</h2> 
  <div class="line"></div>
  <div class="container">
    <h1>{monthDay}</h1>
    <NameDay/>
  </div>
  <div class="horizontal">
    <h2>{monthDay}/{daysOfMonth}</h2><h2>{weekDay.toUpperCase()}</h2>
  </div>
  <div class="line"></div>
 </div>

 <style>

  .line {
    background-color: black;
    height: 2px;
    width: 100%;
  }
  .horizontal {
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    padding:24px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 </style>