import "./assets/main.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Particles from "vue3-particles";
import CustomParticles from "./components/Particles.vue";

const app = createApp(App);
app.use(Particles).use(router);
// app.use(router);

app.mount("#app");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector("#hamburger-11").classList.toggle("is-active");
  });
});

const navbar = document.querySelector(".navbar");
const downloadBtn = document.querySelector(".download");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

function downloadFile() {
  window.open(
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
  );
}
