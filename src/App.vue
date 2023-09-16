<template>
  <Preloader />
  <header>
    <Navbar />
  </header>
  <CustomParticles />
  <RouterView />
  <Footer />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
import CustomParticles from "./components/particles.vue";
import Preloader from "./components/Preloader.vue";

export default {
  components: {
    Navbar,
    CustomParticles,
    Footer,
    Preloader,
  },
  data() {
    return {};
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 12px;
  background: rgba(178, 121, 216, 0.96);
}
::-webkit-scrollbar-track {
  background: rgb(45, 25, 80);
}
::selection {
  text-shadow: 1px 1px 2px rgba(178, 121, 216, 0.96);
  background-color: var(--primary-clr);
  color: rgb(0, 0, 0);
}
</style>
