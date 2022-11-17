<script setup lang="ts">
  const emit = defineEmits(['updateNotes'])
  const { supabase } = useSupabase();
  const { user } = useAuth()
  let notesInput = reactive({
    title: "",
    note: "",
  });

  const addNote = async () => {
    if(!notesInput.title || !notesInput.note) 
      return;
    
    await supabase.from('notes').insert({
      title: notesInput.title,
      note: notesInput.note,
      user_id: user.value.id
    });
    notesInput.title = "";
    notesInput.note = "";
    emit("updateNotes");
  }
</script>

<template>
  <NCard class="card">
    <input class="input" placeholder="My title" v-model="notesInput.title" />
    <textarea class="input" placeholder="My_note" v-model="notesInput.note" />
    <NButton @click="addNote">Add Note</NButton>
  </NCard>
</template>


<style scoped>
.card {
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.input {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5em;
  border-radius: 0.25 rem;
  padding: 0.2rem;
}

button{
  background-color: #ac003e;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
}

button:hover{
  color: rgb(216, 216, 216);
}
</style>
