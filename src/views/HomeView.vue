<template>
  <Hero />
  <About />
  <Projects />
</template>

<script>
import About from "../components/About.vue";
import Hero from "../components/Hero.vue";
import Projects from "../components/Projects.vue";

export default {
  components: { About, Hero, Projects },
  data() {
    return {};
  },
  created() {
    var scripts = ["https://unpkg.com/typer-dot-js@0.1.0/typer.js"];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://unpkg.com/typer-dot-js@0.1.0/typer.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style>
body {
  background-image: linear-gradient(to left, rgb(27, 20, 41), rgb(20, 15, 35));
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
  color: white;
  font-family: "Raleway", "serif";
}

strong {
  text-decoration: none;
  color: var(--primary-clr);
  text-align: center;
}
</style>
