<template>
  <div>
    <v-card class="card">
      <v-card-text>
        <h3 align="left">Historico de aposta</h3> <br>
        <v-data-table class="table" :headers="headers" :items="keys" :rows-per-page-items="[10, 25]">
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.index + 1 }}</td>
            <td class="text-xs-left"> <span
                style="background-color: rgb(116, 242, 126);padding: 4px;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">{{
                  props.item.numeros + " + " + props.item.estrelas }}</span></td>
            <td class="text-xs-left">{{ props.item.data }}</td>
            <td class="text-xs-left">
              <v-btn>
                <v-icon style="color: red;" @click="handleDelete(props.item.chave)">delete_forever</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import axios from 'axios'
async function get() {
  const res = await axios.get('/obter-chave')
  console.log(res);
}
get()

export default {
  data() {
    return {
      keys: [],
      headers: [
        {
          text: 'Nº',
          value: 'num',
          align: 'left',
        },
        {
          text: 'Chave',
          value: 'chave',
          align: 'left',
        },
        {
          text: 'Data',
          value: 'data',
          align: 'left',
        },
        {
          text: 'Actions',
          value: 'actions',
          align: 'left',
        }
      ]
    }
  },

  methods: {
    async handleDelete(index) {
      console.log(index);
      const x = await axios.post('/excluir-chave', { key: index })
      console.log(x);
      location.reload();
    }
  },

  async created() {
    const res = await axios.get('/obter-chave')
    const vm = this;
    var result = res.data.ms
    vm.keys = result;
  }
}
</script>

<style>
.table {
  border-radius: 3px;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
  background-color: transparent;
}

.card {
  text-align: center;
  margin: 5px;
  padding: 65px;
  font-size: 14px;
}
</style>
