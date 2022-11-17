<template>
  <Html>
    <Head>
      <Title>Notes app</Title>
      <Meta name="description" content="resturants list application " />
      <Link rel="preload" href="@/public/favicon.ico" as="script" />
    </Head>
  </Html>

  <div class="container">
    <AuthCard />
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>