<template>
  <section class="about" id="about-section">
    <div class="container">
      <div
        class="left-about-container col-lg-6"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-duration="1500"
      >
        <h2 class="about-me">About Me</h2>
        <p>
          I'm a student living in Slovakia who is passionate about creating
          software that is both user-friendly and impactful in achieving the
          client's objectives. I love the challenge of finding creative
          solutions to problems, and I enjoy collaborating with teams to achieve
          great results.
        </p>
        <p>
          I am dedicated to keeping up-to-date with the latest technologies and
          trends to provide the best solutions for my clients.
        </p>
        <p class="resume">Also, Check Out My <strong>Resume</strong></p>
        <a href="/static/media/Resume.pdf" target="_blank"
          ><button>Grab a copy</button></a
        >
      </div>

      <div
        class="right-about-container col-lg-6"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-duration="1500"
      >
        <h2 class="skills">Skills</h2>
        <div class="row">
          <div class="col-6 col-md-4">
            <img src="../assets/html.831b0a8a.svg" alt="Html" title="HTML" />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/css.9a2d55c8.svg" alt="css" title="CSS" />
          </div>
          <div class="col-6 col-md-4">
            <img
              src="../assets/javascript.7ae6c4c0.svg"
              alt="javascript"
              title="JS"
            />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/vue.png" alt="Vue" title="Vue" />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/nuxt.svg" alt="Nuxt" title="Nuxt" />
          </div>
          <div class="col-6 col-md-4">
            <img
              src="../assets/bootstrap.a071d875.svg"
              alt="Bootstrap"
              title="Bootstrap"
            />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/sass.9b08e317.svg" alt="Sass" title="Sass" />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/gsap.webp" alt="Gsap" title="GSAP" />
          </div>
          <div class="col-6 col-md-4">
            <img src="../assets/git.273a5c87.svg" alt="Git" title="GIt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.about {
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;

  justify-content: center;
  align-items: center;
}
.about .container {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
.about .container > * {
  padding-inline: 2rem;
  margin-block: 5rem;
}
.container h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  color: var(--primary-clr);
  font-weight: bold;
}
.left-about-container p {
  font-size: 18px;
  text-align: center;
}
.right-about-container img {
  height: 5rem;
  padding-inline: 0.8rem;
  margin-block: 1rem;
}
.right-about-container img:hover {
  transform: scale(1.02);
}
.right-about-container span {
  font-style: italic;
  font-weight: 500;
  line-height: 26px;
  font-size: 17px;
}
.right-about-container .row div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-about-container .resume {
  font-weight: bold;
  font-size: 20px;
}
.left-about-container button {
  margin: 0 auto;
  display: block;
  color: #fff;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;

  background-color: rgb(98, 54, 134) !important;
  border-color: rgb(98, 54, 134) !important;
  transition: filter 0.2s linear 0s !important;
}
.left-about-container button:hover {
  filter: brightness(1.5);
}
section.about a {
  text-decoration: none;
}
</style>
