<template>
  <div class="person">
    <h1> ref,reactive 对象类型的某个属性</h1>
    <h2>Name: {{ person.name }} </h2>
    <h2>Name: {{ person.age }} </h2>
    <h2>Car 1: {{ person.car.c1 }} </h2>
    <h2>Car 2: {{ person.car.c2 }} </h2>

    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="changeC1">Change C1</button>
    <button @click="changeC2">Change C2</button>
    <button @click="changeCar">Change Car</button>
  </div>
</template>


<script lang="ts" setup>
import {ref, reactive, toRefs, computed, watch} from 'vue'

defineOptions({
  name: 'Person'
})
// data
let person = reactive({name: 'fiona', age: 35, car:{c1:'benz', c2:'audi'}})

// function
function changeName() {
  person.name +='~'
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = 'yadi'
}
function changeC2() {
  person.car.c2 = 'aima'
}
function changeCar() {
  person.car = {c1:'jiefa', c2:'tongyong'}
}

// watch(()=>person.name, (newValue, oldValue) => {
//   console.log(newValue, '--', oldValue)
//
// })
watch(() => person.car, (newValue, oldValue) => {
   console.log(newValue, '--', oldValue)
 }, {deep: true})

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
