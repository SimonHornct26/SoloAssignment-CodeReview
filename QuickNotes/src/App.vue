<script setup>
import { ref, computed } from 'vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'
import SearchBar from './components/SearchBar.vue'
import { useNotes } from './composables/useNotes'

const { addNote, deleteNote, searchNotes } = useNotes()
const searchText = ref('')

const filteredNotes = computed(() => searchNotes(searchText.value))

function handleAdd(note) {
  addNote(note.title, note.content, note.tags)
}
</script>

<template>
  <main>
    <h1>QuickNotes</h1>

    <NoteForm @add="handleAdd" />

    <SearchBar v-model="searchText" />

    <p v-if="filteredNotes.length === 0">
      Keine Notizen gefunden.
    </p>

    <div class="notes">
      <NoteCard
        v-for="note in filteredNotes"
        :key="note.id"
        :note="note"
        @delete="deleteNote"
      />
    </div>
  </main>
</template>
