<script setup lang="ts">
interface Props {
  num1: number
  num2: number
  operation: string
  result: number | string
}

interface Emits {
  (e: 'update:num1', value: Event): void
  (e: 'update:num2', value: Event): void
  (e: 'update:operation', value: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Available operations
const operations = [
  { symbol: '+', name: 'Adição', icon: 'bi-plus-lg', color: '#10b981' },
  { symbol: '-', name: 'Subtração', icon: 'bi-dash-lg', color: '#f59e0b' },
  { symbol: '*', name: 'Multiplicação', icon: 'bi-x-lg', color: '#3b82f6' },
  { symbol: '/', name: 'Divisão', icon: 'bi-slash-lg', color: '#ef4444' },
]

const currentOperation = operations.find((op) => op.symbol === props.operation)
</script>

<template>
  <main class="main-container">
    <!-- Instruction banner -->
    <div class="instruction-banner">
      <i class="bi bi-info-circle-fill"></i>
      <span>Altere os valores para calcular automaticamente</span>
    </div>

    <!-- Input section -->
    <div class="inputs-grid">
      <!-- First number -->
      <div class="input-group-wrapper">
        <label for="num1" class="input-label">
          <span class="label-badge">1</span>
          Primeiro Número
        </label>
        <div class="custom-input-group">
          <span class="input-icon">
            <i class="bi bi-1-circle-fill"></i>
          </span>
          <input
            id="num1"
            :value="props.num1"
            @input="emit('update:num1', $event)"
            type="number"
            class="custom-input"
            placeholder="0"
            step="any"
          />
        </div>
      </div>

      <!-- Second number -->
      <div class="input-group-wrapper">
        <label for="num2" class="input-label">
          <span class="label-badge">2</span>
          Segundo Número
        </label>
        <div class="custom-input-group">
          <span class="input-icon">
            <i class="bi bi-2-circle-fill"></i>
          </span>
          <input
            id="num2"
            :value="props.num2"
            @input="emit('update:num2', $event)"
            type="number"
            class="custom-input"
            placeholder="0"
            step="any"
          />
        </div>
      </div>

      <!-- Operation selector -->
      <div class="input-group-wrapper full-width">
        <label for="operation" class="input-label">
          <span class="label-badge">3</span>
          Operação Aritmética
        </label>
        <div class="custom-input-group">
          <span class="input-icon">
            <i :class="currentOperation?.icon" :style="{ color: currentOperation?.color }"></i>
          </span>
          <select
            id="operation"
            :value="props.operation"
            @change="emit('update:operation', $event)"
            class="custom-select"
          >
            <option v-for="op in operations" :key="op.symbol" :value="op.symbol">
              {{ op.name }} ({{ op.symbol }})
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Result section -->
    <div class="result-section">
      <div class="result-header">
        <h3 class="result-title">
          <i class="bi bi-check-circle-fill"></i>
          Resultado
        </h3>
        <span class="auto-badge">
          <i class="bi bi-lightning-fill"></i>
          Automático
        </span>
      </div>

      <div class="result-card">
        <div class="result-display">
          {{ props.result }}
        </div>
        <div class="result-expression">
          <code>{{ props.num1 }} {{ props.operation }} {{ props.num2 }} = {{ props.result }}</code>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  padding: 2.5rem;
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
}

/* Instruction banner */
.instruction-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.instruction-banner i {
  font-size: 1.25rem;
}

/* Inputs grid */
.inputs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.full-width {
  grid-column: 1 / -1;
}

/* Input group */
.input-group-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}

.label-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
}

.custom-input-group {
  display: flex;
  align-items: stretch;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.custom-input-group:focus-within {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.input-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background: #f9fafb;
  border-right: 2px solid #e5e7eb;
  color: #667eea;
  font-size: 1.25rem;
}

.custom-input,
.custom-select {
  flex: 1;
  padding: 0.875rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  background: white;
}

.custom-input::placeholder {
  color: #9ca3af;
}

.custom-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23667eea' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

/* Result section */
.result-section {
  margin-top: 2rem;
}

.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.result-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.result-title i {
  color: #10b981;
  font-size: 1.5rem;
}

.auto-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.result-card {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 3px solid #10b981;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.result-display {
  font-size: 3.5rem;
  font-weight: 800;
  color: #047857;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  word-break: break-all;
}

.result-expression {
  margin-top: 1rem;
}

.result-expression code {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  color: #047857;
  font-weight: 600;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-container {
    padding: 1.5rem;
  }

  .inputs-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .result-display {
    font-size: 2.5rem;
  }

  .result-expression code {
    font-size: 0.95rem;
    padding: 0.625rem 1rem;
  }

  .instruction-banner {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
