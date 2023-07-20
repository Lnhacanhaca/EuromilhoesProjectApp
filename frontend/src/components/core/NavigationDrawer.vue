<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app style="background-color: rgb(62, 86, 68);">
    <v-toolbar flat class="toolbar" style="background-color: rgb(115, 158, 127);">
      <router-link :to="{ name: 'Dashboard' }">
        <v-avatar color="#fff" size="40">
          <v-icon>account_circle</v-icon> 
    </v-avatar> 
      </router-link> <span style="margin-left: 10px; text-decoration: none; color: black;">Anónimo</span>
    </v-toolbar>


    <v-list>
      <v-list-tile @click="changeRoute('Dashboard', 1)" :class="[{'active': selectedIndex === 1}, 'button' ]" style="background-color: white;">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{ $t('dashboard') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Chave', 2)" :class="[{'active': selectedIndex === 2}, 'button' ]" style="background-color: white;">
        <v-list-tile-action>
          <v-icon>add_circle_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title> {{ $t('Chave') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Historico', 3)" :class="[{'active': selectedIndex === 3}, 'button' ]" style="background-color: white;">
        <v-list-tile-action>
          <v-icon>history</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{ $t('Historico') }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      isActive : false
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
   
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
    background-color: #465A65;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .button{
    margin-top: 15px;
    width: 275px;
    margin-left: 10px;
  }

  .active{
    background-color: #01968A !important;
    color: white;
  }
  
  
 
</style>
