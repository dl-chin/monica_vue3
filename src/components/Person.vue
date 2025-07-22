<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>address: {{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<script lang="ts" setup>
import {ref} from 'vue'
let name = ref('fiona')
let age = ref(35)
let address = 'LiangNing Dalian'
let tel = '13612345678';

function changeName() {
  name.value = 'zhang san';
  console.log(name);
}

function changeAge() {
  age.value += 1;
  console.log(age);
}

function showTel() {
  alert(tel)
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
