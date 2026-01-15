<script setup lang="ts">
interface Props {
  pendingTask: number
}

const props = defineProps<Props>()
</script>

<template>
  <header class="p-5 mb-4 mt-4 bg-light rounded-3">
    <h1>Tarefas</h1>
    <p class="lead mb-0">
      Você possui {{ props.pendingTask }} tarefa{{ props.pendingTask !== 1 ? 's' : '' }} pendente{{
        props.pendingTask !== 1 ? 's' : ''
      }}
    </p>
  </header>
</template>
