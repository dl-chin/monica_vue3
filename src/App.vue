<template>
  <div class="app">
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">Home</RouterLink>
      <RouterLink to="/news" active-class="active">News</RouterLink>
      <RouterLink :to="{name:'haruka', params:{x:1,y:2,z:3}}" active-class="active">Haruka</RouterLink>
      <RouterLink  replace :to="{name:'fiona', params:{x:4,y:5,z:6}}" active-class="active">Fiona</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script lang="ts" setup name="App">

</script>
<style>
/* App */
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>

