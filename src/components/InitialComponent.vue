<template>
  <div class="index">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
            <h1 class="d-block w-100 elemento">APP CONTACTOS</h1>
        </div>
        <div class="carousel-item">
          <p class="d-block w-100 elemento">
            Esta es una pequeña aplicacion de Agenda.
          </p>
        </div>
        <div class="carousel-item">
          <p class="d-block w-100 elemento">
            Para el <strong>Back-End</strong> se utilizó NodeJs y MongoDB. Y por
            el lado del <strong>Front-End</strong> se utilizó Vue.js junto con
            Bootstrap para los estilos
          </p>
        </div>
        <div class="carousel-item">
          <p class="d-block w-100 elemento">
            Para hacer uso de esta aplicacion es necesario crear un usuario lo
            cual requiere de un email y una contraseña para posteriormente poder
            agregar contactos a la Agenda del usuario.
          </p>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "initial-component",
};
</script>

<style>
.elemento {
  background: black;
  color: white;
  font-weight: 600;
  height: 580px;
  padding: 240px 0;
}
</style>