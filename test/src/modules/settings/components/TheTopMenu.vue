<template>
  <div class="top-menu top-menu_padding">
    <div
      class="top-menu__item top-menu__item_padding"
      v-for="(item, index) in menuItems"
      :key="index"
      :class="{'top-menu__active': item.to === $route.path}"
    >
      <router-link :to="item.to">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menuItems: [
        {
          name: 'Profile',
          to: ''
        },
        {
          name: 'Notifications',
          to: ''
        },
        {
          name: 'Password',
          to: ''
        },
        {
          name: 'Working Hours',
          to: '/settings/working-hours'
        },
        {
          name: 'Call settings',
          to: ''
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .top-menu {
    display: flex;
    border-bottom: solid 1px #E9E9E9;
  }
  .top-menu__item {
    display: flex;
    font-weight: 500;
    color: #97040C;
  }
  .top-menu__active {
    color: #4A4A4A;
    font-weight: 700;
    border-bottom: solid 2px #9F0109;
  }
  .top-menu__item_padding {
    padding: 20px 30px 20px 30px;
  }
  .top-menu_padding {
    padding: 0 10px 0 10px;
  }
</style>
