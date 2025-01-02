<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div>
    <div class="task">
      <p>{{ task.name }}</p>
      <p class="delete" @click="$emit('delete')">X</p>
    </div>
  </div>
</template>
<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0 20px;
  margin-top: 10px;
  border-radius: 20px;
}

.delete {
  font-weight: bold;
  cursor: pointer;
  color: red;
}
</style>
