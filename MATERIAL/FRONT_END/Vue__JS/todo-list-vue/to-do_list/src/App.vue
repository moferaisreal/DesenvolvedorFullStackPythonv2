<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Header from './components/Header__.vue'
import Form from './components/Form__.vue'
import Tasks from './components/Tasks__.vue'

interface Task {
  task: string
  finished: boolean
}

// Use ref for reactive primitives
const filter = ref<'todas' | 'pendentes' | 'finalizadas'>('todas')
const tempTask = ref('')

// Use ref for array with objects for better reactivity
const tasks = ref<Task[]>([
  { task: 'Beber Água', finished: false },
  { task: 'Estudar', finished: true },
  { task: 'Academia', finished: true },
])

// Computed properties instead of methods
const pendingTasks = computed(() => {
  return tasks.value.filter((task) => !task.finished)
})

const finishedTasks = computed(() => {
  return tasks.value.filter((task) => task.finished)
})

// Filter and sort tasks
const filteredTasks = computed(() => {
  let result: Task[]

  switch (filter.value) {
    case 'pendentes':
      result = pendingTasks.value
      break
    case 'finalizadas':
      result = finishedTasks.value
      break
    default:
      // Sort: unfinished first, then finished
      result = [...tasks.value].sort((a, b) => {
        if (a.finished === b.finished) return 0
        return a.finished ? 1 : -1
      })
  }

  return result
})

// Add new task
const addTask = () => {
  if (tempTask.value.trim() === '') return

  const newTask: Task = {
    task: tempTask.value.trim(),
    finished: false,
  }

  // Insert at the beginning (unfinished tasks come first)
  tasks.value.unshift(newTask)
  tempTask.value = ''
}

// Update task status and sort
const updateTaskStatus = (index: number, finished: boolean) => {
  // Update the task status
  tasks.value[index].finished = finished

  // If task is now finished, move it to end
  if (finished) {
    const task = tasks.value.splice(index, 1)[0]
    tasks.value.push(task)
  }
}

// Event handlers with proper typing
const handleEditTask = (e: Event) => {
  tempTask.value = (e.target as HTMLInputElement).value
}

const handleFilterChange = (e: Event) => {
  filter.value = (e.target as HTMLSelectElement).value as 'todas' | 'pendentes' | 'finalizadas'
}
</script>

<template>
  <div class="container">
    <Header :pending-task="pendingTasks.length" />
    <Form
      :temp-task="tempTask"
      :edit-task="handleEditTask"
      :add-task="addTask"
      :filter-task="handleFilterChange"
    />
    <Tasks :tasks="filteredTasks" :all-tasks="tasks" @update-task="updateTaskStatus" />
  </div>
</template>
