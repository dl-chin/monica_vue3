<template>
  <div class="person">
    <h1> 同时监视多个属性</h1>
    <h2>温度: {{ temperature }} </h2>
    <h2>湿度: {{ humidity }} </h2>


    <button @click="changeTemp">Change temperature</button>
    <button @click="changeHumi">Change humidity</button>

  </div>
</template>


<script lang="ts" setup>
import {ref, reactive, toRefs, computed, watch, watchEffect} from 'vue'

defineOptions({
  name: 'Person'
})
// data
let temperature = ref(10)
let humidity = ref(50)


// function
function changeTemp() {
  temperature.value += 10
}
function changeHumi() {
  humidity.value += 5
}

//   console.log(newValue, '--', oldValue)
//
// })
// watch([temperature, humidity], (newValue) => {
//   const [temp, humi] = newValue
//   if (temp >= 50 || humi >= 70 ) {
//     console.log("send to service~~~")
//   }
//   })

watchEffect(() => {
  if (humidity.value >= 70 || temperature.value >= 50) {
    console.log("send to service~~~")
  }
})

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
