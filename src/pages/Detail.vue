<script setup lang="ts">

import {useRoute,useRouter} from "vue-router";
import {toRefs} from "vue";

// const route = useRoute();
const {query} = toRefs(useRoute());

const router = useRouter()
setTimeout(() => {
  //router.push('/home')
  router.replace('/home')
}, 3000);

</script>

<template>
  <h2>{{ query.id}}</h2>

  <h2>{{ query.title}}</h2>

  <h2>{{ query.content}}</h2>

</template>

<style scoped>

</style>