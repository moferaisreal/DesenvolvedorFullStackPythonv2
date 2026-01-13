<script setup lang="ts">
import { reactive, ref } from 'vue'

const souMacaco = {
  nome: 'Macaco Preto',
  idade: 20,
  sexo: 'M',
}
function falaMacaco(nome: string) {
  return `${nome} diz uh Ah Ah Ah `
}

const foto3x4 =
  'https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg'

const foto3x4_II =
  'https://st2.depositphotos.com/2927537/6666/i/450/depositphotos_66660735-stock-photo-monkey-portrait.jpg'

const estadoBotao = ref(false)
const esMacaco = ref(true)
const esMacaco_II = ref(false)

const auth = ref(true)

// const counter = ref(0)
const estado = reactive({
  counter: 0,
  email: '',
  saldo: 20000000,
  transfer: '',
  nombres: [''],
  nuNombres: '',
})
function increment() {
  estado.counter++
}
function decrement() {
  estado.counter--
}

function showSaldo() {
  const { saldo, transfer } = estado
  return saldo - transfer
}
function validaTransferencia() {
  const { saldo, transfer } = estado
  return saldo >= transfer
}

function addNombre() {
  if (estado.nuNombres.length >= 2) {
    estado.nombres.push(estado.nuNombres)
  } else {
    alert('Nome inválido')
  }
}
</script>

<template>
  <h1>{{ souMacaco.nome }}</h1>
  <h3>{{ souMacaco.idade }}</h3>
  <h3>{{ souMacaco.sexo }}</h3>
  <h2>{{ falaMacaco('pedin') }}</h2>
  <img v-if="esMacaco" v-bind:src="foto3x4" alt="" />
  <img v-else-if="esMacaco_II" :src="foto3x4_II" alt="" />
  <h2 v-else>Não é macaco?</h2>

  <h1 v-if="auth">Welcome</h1>
  <h1 v-else>Out!</h1>
  <button :disabled="!estadoBotao">Send</button>
  <button @click="esMacaco = !esMacaco">Macaco 1?</button>
  <button @click="esMacaco_II = !esMacaco_II">Macaco 2?</button>
  <button @click="auth = !auth">Auth?</button>
  <br />
  <hr />
  {{ estado.counter }}
  <button @click="increment" type="button">+</button>
  <button @click="decrement" type="button">-</button>
  <br />
  <hr />
  {{ estado.email }}
  <input type="email" @keyup="(event) => (estado.email = event.target.value)" />
  <br />
  <hr />
  Saldo: {{ estado.saldo }} <br />
  Transferindo: {{ estado.transfer }} <br />
  Saldo total:{{ showSaldo() }} <br />
  <input
    class="field"
    :class="{ invalid: !validaTransferencia() }"
    @keyup="(e) => (estado.transfer = e.target.value)"
    type="number"
    name=""
    id=""
  />
  <button v-if="validaTransferencia()">Transferir</button>
  <span v-else>Saldo indisponível</span>
  <br />
  <hr />
  <br />
  <hr />

  <ul>
    <li v-for="name in estado.nombres">{{ name }}</li>
  </ul>
  <input
    @keyup="(e) => (estado.nuNombres = e.target.value)"
    type="text"
    placeholder="Adicionar Burrinho"
  />
  <button @click="addNombre()" type="button">Add Nome</button>
  <h3 v-for="name in estado.nombres">{{ name }}</h3>
</template>

<style scoped>
img {
  width: 300px;
  height: 300px;
}

.field {
  border: 1px solid #000;
}

.invalid {
  outline-color: red;
  border-color: red;
}
</style>
