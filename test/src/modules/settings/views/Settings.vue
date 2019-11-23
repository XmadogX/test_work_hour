<template>
  <div class="settings_margin">
    <h2 class="settings__title settings__title_margin">Settings</h2>
    <div class="card">
      <div class="card__header">
        <TheTopMenu/>
      </div>
      <div class="card__body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheTopMenu from '../components/TheTopMenu.vue'

export default {
  components: {
    TheTopMenu
  }
}
</script>

<style scoped>
  .card {
    background-color: white;
    border-radius: 5px;
  }
  .settings_margin {
    margin: 0 53px 0 100px;
  }
  .settings__title {
    font-weight: 300;
  }
  .settings__title_margin {
    margin-left: 11px
  }
</style>
