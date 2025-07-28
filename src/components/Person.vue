<template>
  <div class="person">
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
    <ul>
      <li v-for="p in list" :key="p.id">{{p.name}} -- {{p.age}}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup>

import {defineProps, withDefaults} from 'vue'
import {type PersonInter, type Persons} from "@/types";

defineOptions({
  name: 'Person'
})

withDefaults(defineProps<{a:string, b:number, list?:Persons}>(),
    {list:()=> [{id:'t0005', name:'luna', age:18}]} )

//console.log(props)

</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
