<template>
  <div class="person">
    <h2>sum is: {{sum}}, {{bigSum}}</h2>
    <button @click="addOne">add one</button>
    <hr>
    <img v-for="(message, index) in dogList" :key="index" :src="message"/>
    <button @click="addDog">add Dog</button>
  </div>
</template>


<script lang="ts" setup>
import A from '../hooks/useSum.ts'
import B from '../hooks/useDog.ts'
defineOptions({
  name: 'Person'
})

const {sum ,bigSum, addOne} = A()
const {dogList, addDog} = B()

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
