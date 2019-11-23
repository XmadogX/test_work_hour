<template>
  <div class="grid col-2">
    <div>
      <TheLeftMenu/>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheLeftMenu from './components/TheLeftMenu.vue'

export default {
  components: {
    TheLeftMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap');
body{
  margin: 0;
  font-family: 'Heebo', sans-serif;
  background-color: #F5F5F7;
  color: #4A4A4A;
}
a {
  text-decoration: none;
  color: inherit;
}
.grid {
  display: grid;
}
.col-2 {
  grid-template-columns: 240px 1fr;
}
</style>
