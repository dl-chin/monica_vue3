<template>
  <div class="person">
    <h1> ref, 基本类型的数据</h1>
    <h2>SUM: {{sum}} </h2>
    <button @click="addSum">+1</button>
  </div>
</template>


<script lang="ts" setup>
import {ref, reactive, toRefs, computed, watch} from 'vue'
defineOptions({
  name: 'Person'
})
// data
let sum = ref(0)

 // function
function addSum() {
  sum.value++
}

const stopWatch = watch(sum, (nv,ov)=>{
  console.log(nv , '---', ov)
  if (nv > 5) {
    stopWatch()
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
