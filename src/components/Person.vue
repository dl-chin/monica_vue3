<template>
  <div class="person">
    name :<input id="name" type="text" v-model="name" /> <br/>
    age: <input id="age" type="text" v-model="age" ><br/>
    full name: {{ fullname}}<br/>

    <button @click="changeName">change Name</button>
    <button @click="changeFullName">change Full Name</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<script lang="ts" setup>
import {ref, reactive, toRefs, computed} from 'vue'
defineOptions({
  name: 'Person'
})
// data
let props = reactive({name:'fiona', age:35})
let {name,age} = toRefs(props)
let fullname = computed({
  get(){
    return name.value +'-'+ age.value
  },
  set(n){
    console.log(n)
    let [n1,n2] = n.split('-')
    name.value = n1
    age.value = parseInt(n2)

  }
})

 // function
function changeName(){
  name.value += '~'
}
function changeFullName(){
  name.value = 'Monica-35'
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
