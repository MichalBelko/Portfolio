<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="left col-md-4">
          Developed by <strong>Michal Belko</strong>
        </div>
        <div class="middle col-md-4">Copyright © 2023</div>
        <div class="links col-md-4 d-md-block">
          <a href="https://www.facebook.com/michalbelko02"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://www.instagram.com/_michal.belko_/"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="https://github.com/MichalBelko"
            ><i class="fab fa-github"></i
          ></a>
          <a href="mailto: michalbelko02@gmail.com"
            ><i class="fa-solid fa-at"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: rgba(10, 4, 22, 0.816);
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.col-md-4 {
  text-align: center;
}

.links a {
  margin: 0 15px;
  padding: 0;
  color: white;
  align-items: center;
}
a i {
  vertical-align: middle;
}
.links a:hover {
  color: var(--primary-clr);
}
footer .row div {
  margin-bottom: 5px;
}
.links {
  display: none;
}
</style>
