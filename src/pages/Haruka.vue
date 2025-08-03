<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

// const route = useRoute();
const {params} = toRefs(useRoute());
</script>

<template>
  綾瀬はるかさんのスリーサイズは、 バスト{{ params.x }}cm、ウエスト{{ params.y }}cm、ヒップ{{ params.z }}cm と推測されているようです。
</template>

<style scoped>

</style>