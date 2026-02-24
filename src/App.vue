<script setup lang="ts">
const checklist: string[] = [
  'Stage your file changes with git add',
  'Commit and watch Husky run lint-staged',
  'Use manual format commands when you want style-only cleanup'
];
</script>

<template>
  <main class="shell">
    <section class="card">
      <h1>Vue + Husky Demo</h1>
      <p>This project demonstrates pre-commit linting and formatting for Vue projects.</p>
      <ul>
        <li v-for="item in checklist" :key="item">{{ item }}</li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.card {
  width: min(720px, 100%);
  border: 1px solid #d8e0ec;
  border-radius: 14px;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 10px 35px rgba(18, 35, 63, 0.08);

  h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.6rem, 3vw, 2rem);
  }

  p {
    margin: 0 0 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }
}
</style>
