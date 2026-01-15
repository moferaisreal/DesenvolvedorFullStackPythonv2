<script setup lang="ts">
interface Props {
  addTask: () => void
  tempTask: string
  filterTask: (event: Event) => void
  editTask: (event: Event) => void
}

const props = defineProps<Props>()
</script>

<template>
  <form @submit.prevent="props.addTask" class="mb-4">
    <div class="row g-3">
      <div class="col-md-6">
        <input
          :value="props.tempTask"
          @input="props.editTask"
          required
          type="text"
          placeholder="Digite a tarefa"
          class="form-control"
        />
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary w-100" type="submit">Adicionar +</button>
      </div>
      <div class="col-md-4">
        <select @change="props.filterTask" class="form-control">
          <option value="todas">Todas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>
    </div>
  </form>
</template>
