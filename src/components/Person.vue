<template>
  <div class="person">
    aaa
  </div>
</template>


<script lang="ts" setup>
import { type PersonInter, type Persons } from '@/types'

defineOptions({
  name: 'Person'
})

// let fiona: PersonInter = {id:'t001', name:'fiona', age:33}
let persions:Persons = [{id:'t001', name:'fiona', age:33},
  {id:'t002', name:'monica', age:34},
  {id:'t003', name:'june', age:35}]

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
