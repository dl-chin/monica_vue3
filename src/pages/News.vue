<script setup lang="ts">
const newsList = [
  {id:'t001',title:'xinwen title 01', content:'xinwen content 01'},
  {id:'t002',title:'xinwen title 01', content:'xinwen content 01'},
  {id:'t003',title:'xinwen title 01', content:'xinwen content 01'},
  {id:'t004',title:'xinwen title 01', content:'xinwen content 01'},
]
</script>

<template>
<ul class="news-list">
  <li v-for="news in newsList" :key="news.id">
    <router-link :to="{path:'/news/detail', query:{id:news.id, title:news.title, content:news.content}}">{{news.title}}</router-link>
  </li>

</ul>

  <router-view></router-view>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>