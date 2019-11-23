<template>
  <div class="left-menu">
    <div class="left-menu__items left-menu__items_margin">
      <div
        class="left-menu__item left-menu__item_margin"
        v-for="(item,index) in menuItems"
        :key="index"
      >
        <i
          class="fa left-menu__icon left-menu__icon_margin"
          :class="item.icon"
          aria-hidden="true"
        ></i>
        {{item.name}}
      </div>
    </div>
    <div class="left-menu__settings left-menu__settings_padding">
      <div class="left-menu__foto left-menu__foto_margin"></div>
      <router-link to="/settings/working-hours">Settings</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        {
          icon: 'fa-tachometer',
          name: 'Dashboard'
        },
        {
          icon: 'fa-calendar',
          name: 'Calendar'
        },
        {
          icon: 'fa-address-card-o',
          name: 'Customers'
        },
        {
          icon: 'fa-comments-o',
          name: 'Chats'
        },
        {
          icon: 'fa-list-ul',
          name: 'Tasks'
        },
        {
          icon: 'fa-inbox',
          name: 'Inbox'
        },
        {
          icon: 'fa-tty',
          name: 'Calls'
        },
        {
          icon: 'fa-folder-open-o',
          name: 'Leads'
        },
        {
          icon: 'fa-users',
          name: 'Team'
        }
      ]
    }
  }
}
</script>
<style scoped>
.left-menu {
  font-weight: 500;
  background: linear-gradient(to top, #E7191F, #DC3C40);
  width: 240px;
  height: 100vh;
  position: fixed;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-menu__items_margin {
  margin: 70px 0 0 20px
}
.left-menu__item {
  display: flex;
  align-items: center;
}
.left-menu__item_margin {
  margin: 0 0 30px 0
}
.left-menu__icon {
  font-size: 20px;
  width: 23px;
}
.left-menu__icon_margin {
  margin: 0 20px 0 0
}
.left-menu__settings {
  background-color: #B93437;
  display: flex;
  align-items: center;
}
.left-menu__foto {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: solid 1px #E8E8E8;
  background-color: #B93437;
}
.left-menu__foto_margin {
  margin: 0 14px 0 14px;
}
.left-menu__settings_padding {
  padding: 20px 0 20px 0;
}
</style>
