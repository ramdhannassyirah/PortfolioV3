<script setup>
defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="type"> {{ name }} </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :id="type"
      required
    />
  </div>
</template>

<style scoped>
label {
  display: block;
}

input {
  outline: none;
  padding: 0 2px;
  margin-top: 4px;
}
</style>
