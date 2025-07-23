<template>
  <div class="person">
<h2>One car name is {{car.brand}}, price is {{car.price}}</h2>
    <button @click="changePrice">change price</button>
    <ul>
    <li v-for="p in ps" v-bind:key="p.id">{{p.name}}</li>
    </ul>

    <button @click="changeName">change Name</button>

    <hr>
    <h2>{{obj.a.b.c.name}}</h2>
    <button @click="changeObj">change price</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<script lang="ts" setup>
import {ref, reactive} from 'vue'
defineOptions({
  name: 'Person'
})
// data
let car = ref({brand:'benz', price:100})
let ps = ref([
  {id:'f01', name:'June'},
  {id:'f02', name:'Fiona'},
  {id:'f03', name:'Monica'}
])

console.log(car)
console.log(ps)
let obj = reactive({
  a:{
    b:{
      c:{
        name:666
      }
    }
  }
})

// methods

function changePrice() {
  //car.price += 10;
 // car.value.price += 10;
 //  car = Object.assign(car, {brand:'Audi', price:200})
  car.value = {brand:'Toyota', price:50}
}

function changeName() {
  ps.value[0].name = 'Luna'
}

function changeObj() {
  obj.a.b.c.name = 999
}

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
