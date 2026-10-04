<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])

const title = ref('')
const content = ref('')
const tags = ref('')

function submitNote() {
  if (!title.value.trim() || !content.value.trim()) {
    return
  }

  const tagList = tags.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')

  emit('add', {
    title: title.value.trim(),
    content: content.value.trim(),
    tags: tagList
  })

  title.value = ''
  content.value = ''
  tags.value = ''
}
</script>

<template>
  <form @submit.prevent="submitNote">
    <input
      v-model="title"
      placeholder="Titel"
    />

    <textarea
      v-model="content"
      placeholder="Notiz..."
    ></textarea>

    <input
      v-model="tags"
      placeholder="Tags, mit Komma getrennt"
    />

    <button type="submit">
      Notiz hinzufügen
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input,
textarea {
  padding: 8px;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  min-height: 100px;
}

button {
  align-self: flex-start;
  padding: 8px 12px;
}
</style>
