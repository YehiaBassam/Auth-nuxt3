<script setup lang="ts">
const { user, signUp, signIn } = useAuth();
const authState = ref<"login" | "signup">("login");
const input = reactive({
  email: "",
  password: "",
})
const authError = ref("");
const router = useRouter();
const showConfirmMessage = ref(false);

const toggleAuthState = () => {
  if (authState.value === "login") 
  authState.value = "signup";
  else 
  authState.value = "login";
  
  authError.value = "";
};

  const handleSubmit = async () => {
    try {
      if (authState.value === "login"){ // sign in (login)
        await signIn({email: input.email, password: input.password});
        router.push('/profile');
      } else { // sign up (register)
        await signUp({email: input.email, password: input.password});
        showConfirmMessage.value = true;
      }

      input.email = input.password = "";
    } catch (error) {
      authError.value = error.message;
    }
}
</script>

<template>
  <div>
    <NCard class="card">
      <div>
        <h3>{{ authState }}</h3>
        <div class="input-container">
          <input 
            placeholder="Email"
            v-model="input.email"
          />
          <input
            placeholder="Password"
            type="password"
            v-model="input.password"
          />
        </div>
        <NButton @click="handleSubmit" style="margin-top:10px">Submit</NButton>
        <p class="error" v-if="authError">{{ authError }}</p>
        <h3 v-if="showConfirmMessage">Please Confirm your mail</h3>
        <p @click="toggleAuthState">
          {{
            authState === "login"
              ? "Don't have an account? Create one now"
              : "Already have an account? Go ahead an log in"
          }}
        </p>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

p {
  color: blue;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 10PX;
}

.error {
  color: red;
}
</style>
