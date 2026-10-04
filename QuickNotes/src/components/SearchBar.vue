<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="search"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    placeholder="Notizen durchsuchen..."
  />
</template>

<style scoped>
.search {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
