<template>
  <section class="hero-container" id="hero-section">
    <div
      class="hero-inner-container row"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="2000"
    >
      <div class="left-inner col-md-7">
        <div class="title">
          <h1 class="heading">
            Hi there,
            <span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </h1>
          <h1 class="heading secondheading">
            I'M <strong>MICHAL BELKO</strong>
          </h1>
        </div>
        <div class="typing">
          <span
            class="typer"
            id="typer"
            data-delay="150"
            data-words="Front-end Developer,Vue developer,Software developer,Web developer"
          ></span>
          <span class="cursor" data-owner="typer">|</span>
        </div>
      </div>
      <div class="right-inner col-md-5">
        <img src="../assets/hero.svg" alt="heroSvg" draggable="false" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero-inner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0;
  overflow: hidden;
  flex-wrap: wrap;
  margin-top: 8rem;
  width: 100%;
}
.row > * {
  padding: 0;
}

.heading {
  font-size: 2.5rem;
  font-weight: normal;
  padding-bottom: 0.5rem;
  margin: 0;
}

.typing {
  padding: 50px 0;
  font-size: 2.2rem;
}
.right-inner img {
  width: 100%;
  max-width: 500px;
  height: auto;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;
  margin: 0 auto;
}
.left-inner {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: 3rem;
}
.hero-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  background-image: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.678),
      rgba(12, 10, 22, 0.863)
    ),
    url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  z-index: -100;
  overflow: hidden;
}
span.wave {
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  overflow: hidden;
  width: auto;
  height: 50px;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.typing span {
  color: rgb(190, 106, 223) !important;
  font-weight: 600;
}

@media only screen and (min-width: 1100px) {
  .hero-inner-container {
    width: 80%;
  }
  .right-inner img {
    max-width: 700px;
    width: 100%;
  }
  .left-inner {
    padding-left: 10rem;
  }
}
@media only screen and (max-width: 768px) {
  .typing {
    font-size: clamp(1.5rem, 3vw + 1rem, 2.5rem);
    text-align: center;
  }
  .title,
  .typing {
    text-align: center;
  }
  .heading {
    font-size: clamp(1.8rem, 2.1vw + 1.5rem, 2.5rem);
  }
  .left-inner {
    padding-left: 0px;
  }
}
</style>
