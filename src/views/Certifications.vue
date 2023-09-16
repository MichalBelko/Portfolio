<template>
  <section class="certifications">
    <div class="container">
      <div class="certifications-heading">
        <h1>My <strong>Certifications</strong></h1>
        <p>Here are a few certifications I've earned recently.</p>
      </div>
      <div class="certifications-menu">
        <button
          v-for="button in buttons"
          @key="index"
          @click="filter()"
          class="filter-btn"
          :data-tag="button"
        >
          {{ button }}
        </button>
      </div>
      <div class="certifications-content flex-lg-row">
        <a href="src/assets/certs/Bootstrap.jpg" data-lightbox="image-1">
          <img
            class="img"
            src="../assets//certs/Bootstrap.jpg"
            alt=""
            data-tag="Frontend"
          />
        </a>
        <a href="src/assets/certs/CCNA2_page-0001.jpg" data-lightbox="image-2">
          <img
            class="img"
            src="../assets//certs/CCNA2_page-0001.jpg"
            alt=""
            data-tag="Other"
          />
        </a>
        <a
          href="src/assets/certs/CISCO-CCNA1_page-0001.jpg"
          data-lightbox="image-3"
        >
          <img
            class="img"
            src="../assets//certs/CISCO-CCNA1_page-0001.jpg"
            alt=""
            data-tag="Other"
          />
        </a>

        <a href="src/assets/certs/FCC_Web.png" data-lightbox="image-4">
          <img
            class="img"
            src="../assets/certs/FCC_Web.png"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/FCCjavascript.png" data-lightbox="image-5">
          <img
            class="img"
            src="../assets/certs/FCCjavascript.png"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/ItFitness.png" data-lightbox="image-6">
          <img
            class="img"
            src="../assets/certs/ItFitness.png"
            alt=""
            data-tag="Other"
          />
        </a>

        <a href="src/assets/certs/Javascript.jpg" data-lightbox="image-7">
          <img
            class="img"
            src="../assets/certs/Javascript.jpg"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/SoloLearn_HTML.png" data-lightbox="image-9">
          <img
            class="img"
            src="../assets/certs/SoloLearn_HTML.png"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/SoloLearnCSS.jpg" data-lightbox="image-10">
          <img
            class="img"
            src="../assets/certs/SoloLearnCSS.jpg"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/SoloLearnJS.png" data-lightbox="image-11">
          <img
            class="img"
            src="../assets/certs/SoloLearnJS.png"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/SololearnPHP.jpg" data-lightbox="image-12">
          <img
            class="img"
            src="../assets/certs/SololearnPHP.jpg"
            alt=""
            data-tag="Backend"
          />
        </a>

        <a href="src/assets/certs/SoloLearnPython.jpg" data-lightbox="image-13">
          <img
            class="img"
            src="../assets/certs/SoloLearnPython.jpg"
            alt=""
            data-tag="Backend"
          />
        </a>

        <a href="src/assets/certs/BootstrapL2C.jpg" data-lightbox="image-14">
          <img
            class="img"
            src="../assets//certs/BootstrapL2C.jpg"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/Sass_L2C.jpeg" data-lightbox="image-15">
          <img
            class="img"
            src="../assets/certs/Sass_L2C.jpeg"
            alt=""
            data-tag="Frontend"
          />
        </a>

        <a href="src/assets/certs/git-GIThubL2C.jpg" data-lightbox="image-16">
          <img
            class="img"
            src="../assets/certs/git-GIThubL2C.jpg"
            alt=""
            data-tag="Other"
          />
        </a>

        <a href="src/assets/certs/WPress_L2C.jpg" data-lightbox="image-17">
          <img
            class="img"
            src="../assets/certs/WPress_L2C.jpg"
            alt=""
            data-tag="Backend"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttons: ["Frontend", "Backend", "Other", "Show all"],
    };
  },
  methods: {
    filter() {
      const imgs = document.querySelectorAll(".img");
      const buttons = document.querySelectorAll(".filter-btn");

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          imgs.forEach(function (img) {
            if (img.dataset.tag === btn.dataset.tag) {
              img.style.display = "block";
            } else if (btn.dataset.tag === "Show all") {
              img.style.display = "block";
            } else {
              img.style.display = "none";
            }
          });
        });
      });
    },
  },
};
</script>

<style scoped>
.certifications-heading {
  text-align: center;
  padding-top: 8rem;
}
.certifications-menu {
  margin: 1rem 0 0 0;
  text-align: center;
}
.certifications-menu button {
  white-space: nowrap;
  transition: 0.2s linear;
  transition-property: background-color, border-color, color;
  background-color: #1a1a1a;
  font-size: 15px;
  padding: 0.3rem 0.6rem;
  border: 1px solid #888;
  color: #fff;
  text-transform: capitalize;
  margin-right: 0.4rem;
  margin-bottom: 2rem;
}
.certifications-menu button:hover {
  border: 1px solid var(--primary-clr);
  background-color: #0c0c0c;
}
.certifications-content img {
  width: 350px;
  height: 280px;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 5px 5px 8px -1px rgb(0, 0, 0);
}

.certifications-menu button:active,
.certifications-menu button:focus {
  background-color: #9551b5;
}
.certifications-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding-block: 2rem;
  flex-direction: column;
}

@media screen and (max-width: 450px) {
  .certifications-content img {
    padding-inline: 2rem;
  }
  #lightbox {
    padding-top: 5rem !important;
  }
}
@media screen and (max-width: 360px) {
  .certifications-menu button {
    margin-bottom: 0.5rem;
  }
}
@media screen and (max-width: 990px) {
  .certifications-content img {
    height: auto;
    margin: 0;
    margin-bottom: 1rem;
    box-shadow: none;
  }
  .certifications-content {
    gap: 0rem;
  }
}
</style>
