<template>
  <div>
    <div class="">
      <h1>To Do List</h1>
    </div>
    <div class="addList">
      <input v-model="task" type="text" placeholder="Add a task" @keyup.enter="add" />
    </div>
    <div v-for="(item, index) in todo.list" :key="index" class="list">
      <TodoList @delete="deleteTodo(index)" :task="item" />
    </div>
  </div>
</template>
<script setup>
import TodoList from '@/components/TodoList.vue'
import { onMounted, reactive, ref } from 'vue'

const task = ref('')
const todo = reactive({
  list: [],
})

onMounted(() => {
  todo.list = JSON.parse(localStorage.getItem('todo') || '[]')
})

const deleteTodo = (index) => {
  todo.list.splice(index, 1)
  saveToLocal()
}

const add = () => {
  if (task.value === '') {
    alert('Please enter a task')
  } else {
    todo.list.unshift({
      name: task.value,
    })
    task.value = ''
    saveToLocal()
  }
}

const saveToLocal = () => {
  localStorage.setItem('todo', JSON.stringify(todo.list))
}
</script>
<style scoped>
* {
  font-family: sans-serif;
}
h1 {
  text-align: center;
}
.addList {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 80%;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
}
</style>
