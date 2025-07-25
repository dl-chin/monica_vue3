<template>
  <div class="person">
    <h1> ref, 对象类型的数据</h1>
    <h2>Name: {{ p.name }} </h2>
    <h2>Name: {{ p.age }} </h2>

    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="changePerson">Change Person</button>
  </div>
</template>


<script lang="ts" setup>
import {ref, reactive, toRefs, computed, watch} from 'vue'

defineOptions({
  name: 'Person'
})
// data
let p = ref({name: 'fiona', age: 35})

// function
function changeName() {
  p.value.name +='~'
}
function changeAge() {
  p.value.age += 1
}

function changePerson() {
  p.value = {name: 'Monica', age: 19}
}

watch(p, (nval,oval) =>{
  console.log(nval, oval)
}, {deep: true, immediate: true})

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
