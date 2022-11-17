<script lang="ts" setup>
  const { signOut, isLoggedIn } = useAuth();
  const showModal = ref(false);
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li @click="!isLoggedIn() ? showModal = true : null">
        <Modal v-show="showModal" @close-modal="showModal = false" />
        <NuxtLink to="/profile">Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="logout" @click="signOut">Logout</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: black;
  height: 10vh;
}

ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 2rem;
}

li {
  color: white;
  margin-right: 1rem;
}

.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>