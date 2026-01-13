<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  filter: 'todas',
  tempTask: '',
  tasks: [
    { task: 'Fazer Macacada', finished: false },
    { task: 'Estudar', finished: true },
    { task: 'Academia', finished: true },
  ],
})

const getUTasks = () => {
  return state.tasks.filter((task) => !task.finished)
}

const getDTasks = () => {
  return state.tasks.filter((task) => task.finished)
}

const getFilteredTasks = () => {
  const { filter } = state
  switch (filter) {
    case 'pendentes':
      return getUTasks()
    case 'finalizadas':
      return getDTasks()
    default:
      return state.tasks
  }
}

const addTask = () => {
  const newTask = {
    task: state.tempTask,
    finished: false,
  }
  state.tasks.push(newTask)
  state.tempTask = ''
}
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Tarefas</h1>
      <p>Você possui {{ getUTasks().length }} tarefas pendentes</p>
    </header>
    <form @submit.prevent="addTask">
      <div class="row">
        <div class="col">
          <input
            :value="state.tempTask"
            @change="(e) => (state.tempTask = e.target.value)"
            required
            type="text"
            placeholder="Digite a tarefa"
            class="form-control"
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" type="submit">Adicionar +</button>
        </div>
        <div class="col-md-2">
          <select @change="(e) => (state.filter = e.target.value)" class="form-control">
            <option value="todas">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="tasks in getFilteredTasks()">
        <input
          @change="(e) => (tasks.finished = e.target.checked)"
          :checked="tasks.finished"
          id="{{tasks.task}}"
          type="checkbox"
        />
        <label :class="{ done: tasks.finished }" class="ms-2" for="tasks.task">{{
          tasks.task
        }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
