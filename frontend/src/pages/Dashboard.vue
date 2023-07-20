<template>
  <div>
    <v-card class="card">
      <v-card-text>
        <strong>Bem Vindo a Sistema de Geração de Chave do Euromilhões</strong>
        <br><br>
        Instruções!<br>
        1- A chave em que pretende apostar, de acordo com as regras de formação das chaves do Euromilhões. <br>
        2 - A cada aposta (chave) gerada ou inserida manualmente, o sistema irá indicar ao utilizador se a combinação já
        foi usada alguma vez.<br>
        3 - Também o utilizador pode "registar" a aposta em causa, guardando-a em base de dados.<br>
        4 - O sistema apenas reconhece utilizadores anónimos e, na base de dados, apenas guarda as apostas (chaves)
        registadas. <br>
        <br>
     
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: ``
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
.card{
  text-align: center;
  margin: 5px;
  padding: 65px;
  font-size: 14px;
}
</style>
