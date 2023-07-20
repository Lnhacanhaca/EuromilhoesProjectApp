<template>
  <v-card class="card">
    <div>
      <h3 style="text-align: left;">Gerar Chave de Aposta</h3>
      <br>

      <div class="wrapper">
        <div>
          <ul class="line">
            <span><em>Digite <strong>numeros(D#)</strong> de [1 – 50] & <strong>estrelas(E#)</strong> de [1 –
                12]</em></span><br>
            <li style="margin-top: 10px;"><v-text-field v-model="da" label="D1" class="field" :maxlength="2"></v-text-field></li>
            <li><v-text-field v-model="db" label="D2" variant="outlined" class="field" :maxlength="2"></v-text-field></li>
            <li><v-text-field v-model="dc" label="D3" variant="outlined" class="field" :maxlength="2"></v-text-field></li>
            <li><v-text-field v-model="dd" label="D4" variant="outlined" class="field" :maxlength="2"></v-text-field></li>
            <li><v-text-field v-model="de" label="D5" variant="outlined" class="field" :maxlength="2"></v-text-field></li>

            <li><v-text-field v-model="ea" label="E1" variant="outlined" class="field"
                style="margin-left: 50px;"></v-text-field></li>
            <li><v-text-field v-model="eb" label="E2" variant="outlined" class="field"></v-text-field></li>
            <br>
            <v-btn class="text-none" min-width="50" variant="outlined" @click="criarChave()"
              style="background: #01968A; border-radius: 20px; text-transform: none; color: white;">
              Registar Chave
            </v-btn>
            <v-btn class="text-none" min-width="50" variant="outlined" @click="limpar()"
              style="background: red; border-radius: 20px; text-transform: none; color: white;">
              Cancelar
            </v-btn>
          </ul>
        </div>


        <div>
          <ul class="line">
            <li class="gerarbtn">
              <v-btn class="text-none" min-width="50" variant="outlined" @click="gerarChave()"
                style="background: #01968A; border-radius: 20px; text-transform: none; color: white;">
                Gerar chave
              </v-btn>
            </li>
            <div class="loger">
              <p id="key"
                style="border-radius: 5px; text-align: center; box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
              </p>
              <p id="log"></p>
            </div>
          </ul>
        </div>
      </div>

      <!--
    <v-card class="card">
      <v-card-text>
        <h1 style="text-align: left;">Gerar Chave de Aposta</h1>




      </v-card-text>
    </v-card>
    -->
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      da: '',
      db: '',
      dc: '',
      dd: '',
      de: '',
      ea: '',
      eb: '',
    }
  },

  methods: {
    getda() {
      da = this.da
    },
    getdb() {
      db = this.db
    },
    getdc() {
      dc = this.dc
    },
    getdd() {
      dd = this.dd
    },
    getde() {
      de = this.de
    },
    getea() {
      ea = this.ea
    },
    geteb() {
      eb = this.eb
    },
    async criarChave() {

      const x = [this.da, this.db, this.dc, this.dd, this.de]
      const y = [this.ea, this.eb]

      const zerox = x.find(element => element === '0');
      const zeroy = y.find(element => element === '0');

      if (x.includes('') || y.includes('')) {
        document.getElementById('log').innerHTML = "Combinação invalida: campo(s) vazio(s)"
        document.getElementById('log').style.color = 'red'
      } else {

        if (zerox === '0' || zeroy === '0') {
          document.getElementById('log').innerHTML = "Combinação invalida: campo(s) com dígito igual a zerro (0)"
          document.getElementById('log').style.color = 'red'
        } else {
          const mx = Math.max(...x);
          const my = Math.max(...y);

          if (mx > 50 || my > 12) {
            document.getElementById('log').innerHTML = "Combinação invalida: campo(s) com dígitos fora do intervalo estabelecido"
            document.getElementById('log').style.color = 'red'
          } else {
            const nums = this.da + " " + this.db + " " + this.dc + " " + this.dd + " " + this.de
            const stars = this.ea + " " + this.eb
            const res = await axios.post('/submeter-chave', { numeros: nums, estrelas: stars })
            console.log(res.data);
            if (res.data === '12000i') {
              document.getElementById('log').innerHTML = "Esta combinação possue repetição de dígitos"
              document.getElementById('log').style.color = 'red'
              document.getElementById('key').innerHTML = ""
              document.getElementById('key').style.background = 'none'
              document.getElementById('key').style.boxShadow = 'none'
            } else {
              if (res.data === 11000) {
                document.getElementById('log').innerHTML = "Esta combinação já foi usada"
                document.getElementById('log').style.color = 'red'
                document.getElementById('key').innerHTML = nums + " + " + stars
                document.getElementById('key').style.backgroundColor = 'red'
                document.getElementById('key').style.width = '150px'
                document.getElementById('key').style.padding = '5px'
                document.getElementById('key').style.color = '#fff'
              } else {
                document.getElementById('key').innerHTML = res.data.ms.numeros + " + " + res.data.ms.estrelas
                document.getElementById('log').innerHTML = "Combinação criada com sucesso"
                document.getElementById('log').style.color = 'green'
                document.getElementById('key').style.backgroundColor = 'green'
                document.getElementById('key').style.width = '150px'
                document.getElementById('key').style.padding = '5px'
                document.getElementById('key').style.color = '#fff'
              }
            }
          }
        }
      }
    },
    async gerarChave() {
      const res = await axios.get('/gerar-chave')
      console.log(res.data);
      const resb = await axios.post('/submeter-chave', { numeros: res.data.num.p, estrelas: res.data.star.y })
      console.log(resb.data);
      if (resb.data === '12000i') {
        document.getElementById('log').innerHTML = "A combinação gerada possue repetição de dígitos. Por favor, volte a gerar novamente"
        document.getElementById('log').style.color = 'red'
        document.getElementById('key').innerHTML = ""
        document.getElementById('key').style.backgroundColor = 'none'
        document.getElementById('key').style.width = 'none'
        document.getElementById('key').style.padding = ''
        document.getElementById('key').style.color = 'none'
      } else {
        if (resb.data === 11000) {
          document.getElementById('log').innerHTML = "Esta combinação já foi usada"
          document.getElementById('log').style.color = 'red'
          document.getElementById('key').innerHTML = res.data.num.p + " + " + res.data.num.p
          document.getElementById('key').style.backgroundColor = 'red'
          document.getElementById('key').style.width = '100px'
          document.getElementById('key').style.padding = '5px'
          document.getElementById('key').style.color = '#fff'
        } else {
          document.getElementById('key').innerHTML = resb.data.ms.numeros + " + " + resb.data.ms.estrelas
          document.getElementById('log').innerHTML = "Combinação criada com sucesso"
          document.getElementById('log').style.color = 'green'
          document.getElementById('key').style.backgroundColor = 'green'
          document.getElementById('key').style.width = '150px'
          document.getElementById('key').style.padding = '5px'
          document.getElementById('key').style.color = '#fff'
        }
      }
    },
    async limpar() {
      document.getElementById('key').innerHTML = ""
      document.getElementById('log').innerHTML = ""
      document.getElementById('key').style.backgroundColor = 'none'
      document.getElementById('key').style.width = 'none'
      document.getElementById('key').style.padding = ''
      document.getElementById('key').style.color = 'none'
    },



  }
}
</script>

<style>
.mx-auto .input {
  display: block;
}

.card {
  text-align: center;
  margin: 5px;
  padding: 65px;
  font-size: 14px;
}

.line {
  text-align: left;
}

.line li {
  display: inline-block;
}

.field {
  width: 29px;
  border-radius: 2px;
  padding: 1px;
}

.wrapper {
  display: grid;
  grid-template-columns: 450px 300px;
}

.loger {
  margin-top: 20px;
}

.gerarbtn {
  margin-top: 90px;
}

@media(max-width: 800px) {
  .wrapper {
    display: inline;
  }

  .gerarbtn {
    margin-top: 5px;
  }
}
</style>
