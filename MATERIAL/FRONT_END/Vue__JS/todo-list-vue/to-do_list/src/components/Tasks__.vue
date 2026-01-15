<script setup lang="ts">
interface Task {
  task: string
  finished: boolean
}

interface Props {
  tasks: Task[]
  allTasks: Task[] // Add allTasks to find the original index
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update-task', index: number, finished: boolean): void
}>()

// Handle checkbox change
const handleCheckboxChange = (task: Task, event: Event) => {
  const target = event.target as HTMLInputElement
  const index = props.allTasks.findIndex((t) => t === task)

  if (index !== -1) {
    emit('update-task', index, target.checked)
  }
}
</script>

<template>
  <!-- Conditional rendering of the ul -->
  <ul v-if="props.tasks.length > 0" class="list-group mt-4">
    <li class="list-group-item" v-for="task in props.tasks" :key="task.task">
      <input
        @change="(e) => handleCheckboxChange(task, e)"
        :checked="task.finished"
        :id="`task-${task.task}`"
        type="checkbox"
        class="form-check-input me-2"
      />
      <label :class="{ done: task.finished, 'form-check-label': true }" :for="`task-${task.task}`">
        {{ task.task }}
      </label>
    </li>
  </ul>
  <div v-else class="mt-4 alert alert-info">Nenhuma tarefa encontrada.</div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #6c757d;
}

.list-group-item {
  display: flex;
  align-items: center;
}

.form-check-input {
  margin-top: 0;
}
</style>
