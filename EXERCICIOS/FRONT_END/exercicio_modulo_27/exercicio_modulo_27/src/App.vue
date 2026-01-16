<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from './components/Header__.vue'
import Main from './components/Main__.vue'
import Footer from './components/Footer__.vue'

// Calculator data
const num1 = ref<number>(0)
const num2 = ref<number>(0)
const operation = ref<string>('+')

// Computed result (reactive)
const result = computed(() => {
  const a = num1.value || 0
  const b = num2.value || 0

  switch (operation.value) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b !== 0 ? (a / b).toFixed(4).replace(/\.?0+$/, '') : 'Erro: divisão por zero'
    default:
      return 0
  }
})

// Event handlers
const updateNum1 = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  num1.value = parseFloat(value) || 0
}

const updateNum2 = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  num2.value = parseFloat(value) || 0
}

const updateOperation = (e: Event) => {
  operation.value = (e.target as HTMLSelectElement).value
}
</script>

<template>
  <div class="app-wrapper">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7">
          <!-- Header -->
          <Header />

          <!-- Calculator Card -->
          <div class="calculator-card">
            <Main
              :num1="num1"
              :num2="num2"
              :operation="operation"
              :result="result"
              @update:num1="updateNum1"
              @update:num2="updateNum2"
              @update:operation="updateOperation"
            />
          </div>

          <!-- Footer -->
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
}

.calculator-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin: 2rem 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.calculator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .app-wrapper {
    padding: 1rem 0.5rem;
  }

  .calculator-card {
    border-radius: 20px;
    margin: 1.5rem 0;
  }
}

@media (min-width: 1400px) {
  .col-xl-7 {
    max-width: 700px;
  }
}
</style>
