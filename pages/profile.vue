<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();
const notes = ref();

const getNotes = async () => {
  notes.value = await supabase
  .from("notes")
  .select()
  .eq("user_id", user.value.id);
}

if (process.client) {
  getNotes()
}

definePageMeta({
  middleware: "custom-auth",
});
</script>

<template>
  <div class="container">
    <h3>My Notes</h3>
    <NotesForm @updateNotes="getNotes"/>
    <div class="card-container" v-if="notes">
      <NCard class="card" v-for="note in notes.data" :key="note.id">
        <h2>{{ note.title }}</h2>
        <p>{{ note.note }}</p>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 70%;
  margin: 30px auto;
}

h3 {
  font-size: 2rem;
}

.card {
  padding: 1rem;
  margin-top: 1.5rem;
}
.card h2 {
  font-weight: bold;
  font-size: 1.5rem;
}
.card-container {
  margin-top: 1.5rem;
}
</style>
