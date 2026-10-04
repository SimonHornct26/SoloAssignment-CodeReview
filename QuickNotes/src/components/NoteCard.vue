<script setup>
import BaseCard from './BaseCard.vue'

defineProps({
  note: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete'])
</script>

<template>
  <BaseCard>
    <template #header>
      {{ note.title }}
    </template>

    <p>{{ note.content }}</p>

    <div class="tags">
      <span
        v-for="tag in note.tags"
        :key="tag"
        class="tag"
      >
        #{{ tag }}
      </span>
    </div>

    <template #footer>
      <button @click="emit('delete', note.id)">
        Löschen
      </button>
    </template>
  </BaseCard>
</template>

<style scoped>
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.tag {
  background: #eee;
  padding: 3px 7px;
  border-radius: 4px;
}

button {
  cursor: pointer;
}
</style>
