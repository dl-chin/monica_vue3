<template>
  <Person a="1+1" :b="1+1" :list="personList"/>

</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import {type Persons} from '@/types'
import {reactive} from "vue";

let personList = reactive<Persons>([
  {id:'t001', name:'fiona', age:33},
  {id:'t002', name:'monica', age:34},
  {id:'t003', name:'june', age:35}
])
</script>

