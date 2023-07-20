<template>
  <v-toolbar app class="tollb">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
    </v-toolbar-title> <span>GERADOR DE CHAVES EUROMILHÕES</span>
    <v-spacer></v-spacer>
  </v-toolbar>
  </template>  

  <script>
    export default {
    data() {
      return {
        rating: null,
        dialog: false,
        dialogSettings: false,
        switchEmailNotification: true,
        showPassword: null,
        showPasswordConfirm: null,
        userEmail: null,
        password: null,
        passwordConfirm: null,
        error: false,
        showResult: false,
        result: '',
        items: [
          {
            icon: 'account_circle',
            href: '#',
            title: 'Profile',
            click: (e) => {
            }
          }
        ]
      }
    },

    methods: {
      toggleNavigationBar() {
        const vm = this;
        vm.$emit('toggleNavigationBar');
      }
    }
  };
  </script>
  <style>
    .toolbar-menu-item {
      padding-left: 5px;
    }
  </style>
