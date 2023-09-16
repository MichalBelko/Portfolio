<template>
  <section class="projects" id="projects-section">
    <div class="projects-info">
      <h1>My Recent <strong>Works</strong></h1>
      <p>Here are a few projects I've worked on recently</p>
    </div>
    <div class="container-fluid">
      <div class="container-item col-lg-6">
        <img
          src="../assets/projects1.png"
          alt="image of the first project"
          data-aos="flip-up"
          data-aos-duration="1000"
        />
        <div class="details">
          <div class="translate-middle">
            <p>Mini Vue project - Test your typing skills</p>
            <div class="links-project">
              <a href="https://github.com/MichalBelko/Vue-SwiftTyper">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/github--v1.png"
                  alt="github--v1"
                />
              </a>
              <a href="https://michalbelko.github.io/Vue-SwiftTyper/">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/visible--v1.png"
                  alt="visible--v1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-item col-lg-6">
        <img
          src="../assets/projects2.png"
          alt="image of the second project"
          data-aos="flip-up"
          data-aos-duration="1000"
        />
        <div class="details">
          <div class="translate-middle">
            <p>Find the best Fire Extinguisher for you - Nuxt Project</p>
            <div class="links-project">
              <a href="https://github.com/MichalBelko/Nuxt-Firengi">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/github--v1.png"
                  alt="github--v1"
                />
              </a>
              <a href="https://michalbelko.github.io/Nuxt-Firengi/">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/visible--v1.png"
                  alt="visible--v1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="pre-footer"
    id="contact-section"
    data-aos="fade-zoom-in"
    data-aos-duration="2000"
  >
    <h1>FIND ME ON</h1>
    <p>Feel free to <strong>connect</strong> with me</p>

    <img src="../assets//avatarFInal-removebg-preview.png" alt="avatar" />
    <div
      class="social-links"
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-easing="ease-in-back"
      data-aos-duration="500"
    >
      <a href="https://www.facebook.com/michalbelko02"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://www.instagram.com/_michal.belko_/"
        ><i class="fab fa-instagram"></i
      ></a>
      <a href="https://github.com/MichalBelko"><i class="fab fa-github"></i></a>
      <a href="mailto: michalbelko02@gmail.com"
        ><i class="fa-solid fa-at"></i
      ></a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.pre-footer p {
  text-align: center;
}
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pre-footer img {
  width: 217px;
  height: 237px;
}

.social-links a {
  width: 80px;
  height: 80px;
  text-align: center;
  text-decoration: none;
  color: #700c86;
  margin: 0 5px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
  background-color: #fff;
  transform: scale(0.6);
  border: 0;
  outline: none;
}

.social-links a .fab,
.social-links a .fa-at {
  font-size: 40px;
  line-height: 80px;
  position: relative;
  z-index: 10;
  transition: color 0.5s;
}

.social-links a::after {
  content: "";
  width: 145%;
  height: 145%;
  top: -100px;
  left: -100px;
  transform: rotate(45deg);
  background: #000000;
  background: linear-gradient(-45deg, #c33764, #1d2671);
  position: absolute;
  transition: 0.5s;
}

.social-links a:hover::after {
  top: -20px;
  left: -20px;
}

.social-links a:hover .fab,
.social-links a:hover .fa-at {
  color: #fff;
}

.pre-footer {
  text-align: center;
  padding-block: 3rem;
}
.pre-footer center {
  margin-bottom: 1.5rem;
}
section.projects {
  padding-block: 3rem 6rem;
}
.projects-info {
  text-align: center;
  padding-block: 2rem;
}
.projects-info h1 {
  font-size: 2.5rem;
}
.projects-info p {
  font-size: 18px;
  padding-inline: 10px;
}

.projects .container-fluid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.projects .container-fluid img {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.details {
  width: 100%;
  height: 100%;
  transition: 0.4s all ease-in-out;
  /* background-color: rgba(0, 0, 0, 0.626); */
  background-color: rgba(24, 18, 38, 0.747);
  color: #fff;
  clip-path: circle(0% at 0 0);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
.translate-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}
.translate-middle p {
  padding-inline: 5%;
  text-align: center;
  font-size: clamp(1rem, 3.8vw + 0.2rem, 1.5rem);
  font-weight: bold;
  letter-spacing: 1.5px;
}
.container-item {
  transform: scale(0.8);
}
.container-item:hover .details {
  clip-path: circle(141.1% at 0 0);
}
.links-project {
  width: 30%;
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links-project img {
  filter: brightness(0) invert(1);
}

@media only screen and (max-width: 430px) {
  .links-project {
    width: 50%;
  }
  section.projects {
    padding-bottom: 4rem;
  }
  .social-links a {
    margin: 0 -5px;
    transform: scale(0.5);
  }
}
</style>
