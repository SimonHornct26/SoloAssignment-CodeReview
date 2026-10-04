import { useLocalStorage } from './useLocalStorage'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(title, content, tags) {
    notes.value.push({
      id: Date.now(),
      title,
      content,
      tags
    })
  }

  function deleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  function searchNotes(searchText) {
    const search = searchText.toLowerCase().trim()

    if (!search) {
      return notes.value
    }

    return notes.value.filter(note => {
      const title = note.title.toLowerCase()
      const content = note.content.toLowerCase()
      const tags = note.tags.join(' ').toLowerCase()

      return (
        title.includes(search) ||
        content.includes(search) ||
        tags.includes(search)
      )
    })
  }

  return {
    notes,
    addNote,
    deleteNote,
    searchNotes
  }
}
