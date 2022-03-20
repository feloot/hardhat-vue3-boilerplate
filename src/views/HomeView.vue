<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    Counter: {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
