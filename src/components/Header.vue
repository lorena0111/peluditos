<template>
    <div class="header">
          <!-- Cabecera Imagen-->
    <main>
      <div class="container">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="images/1-small.jpg" class="d-block w-100" alt="dog img">
            </div>
            <div class="carousel-item">
              <img src="images/2-small.jpg" class="d-block w-100" alt="dog img">
            </div>
            <div class="carousel-item">
              <img src="images/3-small.jpg" class="d-block w-100" alt="dog img">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>

          <!--Seccion de servicios -->
    <section id="services" class="services-section">
      <div class="container py-5">
        <h2>Servicios</h2>
        <div class="row g-5 py-5 row-cols-1 row-cols-lg-3 container-fluid">
          <!-- Servicio1 -->
          <div class="feature col">
            <div>
              <img
                src="images/Donacion.jpg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Donaciones</h2>
            <p>
              Recuerda, puedes apoyar todo nuestro trabajo y esfuerzo, puedes
              poner tu granito de arena, cada uno de estos peluditos te lo
              agredecerá. !Dona Ya!
            </p>
         
            <button type="button" class="btn btn-outline-dark"><a href="Donaciones.html" class="icon-link"></a>donaciones!!</button>
            
      
              <svg class="bi" width="1em" height="1em">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <!-- Servicio 2 -->
          <div class="feature col">
            <div>
              <img
                src="images/productos.jpg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Productos</h2>
            <p>
              Puedes adquirir los mejores productos para tu nuevo amigo, o si ya
              tienes mascota lo puedes consentir con los mejores productos del
              mercado para aseo, alimentación y salud.
            </p>
      
            <button type="button" class="btn btn-outline-dark"><a href="Productos.html" class="icon-link"></a>Compra ya!</button>
              <svg class="bi" width="1em" height="1em">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <!-- Servicio 3 -->
          <div class="feature col">
            <div>
              <img
                src="images/adopta.jpg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Adopciones</h2>
            <p>
              Todavía no tienes mascota, no compres, adopta ya, decenas de
              peluditos esperan por tí, de seguro hay uno que se quedatá en tu
              corazón y en tu alma.
            </p>
            
            <button type="button" class="btn btn-outline-dark"><a href="adopciones.html" class="icon-link"></a>Adopta ya!!</button>
              <svg class="bi" width="1em" height="1em">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Noticias -->
    <section id="news" class="news-section">
      <div class="container">
          <h2>Noticias</h2>
          <div class="row row-cols-1 row-cols-sm-2 py-5"  >
            <div class="col d-flex align-items-start" >
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <div class="n1" >
                <img src="images/news1.png" id="news1">
                <h4 class="fw-bold mb-0"></h4><br>
                <div class="col text-center">
                  <a class="btn btn-outline-dark" href="https://www.instagram.com/p/B-j_aUggu8h/" role="button">Ver más </a>
                </div>
              </div>
            </div>
            <div class="col d-flex align-items-start" >
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#cpu-fill"></use>
              </svg>
              <div class="n2">
                <img src="images/news2.png" id="news2">
                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/CQB1bvWnMG2/"  role="button">Ver más </a>
                </div>  
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" >
                <use xlink:href="#calendar3"></use>
              </svg>
              <div class="n3">
                <img src="images/news3.png" id="news3">
                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/CL4jr2LAKUk/"  role="button">Ver más </a>
                </div>  
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#home"></use>
              </svg>
              <div class="n4">
                <img src="images/news4.png" id="news4">
                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/B-j735dAPaO/"  role="button" >Ver más </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- Seccion de equipo --><!--Laura-->
    <section id="team" class="team-section">
      <div class="container">
        <h2>Nuestros colaboradores</h2>
        <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div class="col">
            <div
              class="
                card card-cover
                h-10
                overflow-hidden
                text-grey
                bg-light
                rounded-5
                shadow-lg
              "
            >
              <article class="team-info">
                <img
                  img
                  class="img-responsive img-thumbnail"
                  src="images/team1.jpg"
                  alt=""
                />
                <p class="text-justify lead reguldisplay-6 lh-1 fw-bold">
                <br>
                  Janet es una de nuestras colaboradoras mas nuevas, lleva con nosotros 2 años y es
                  la encargada de velar por la seguridad de nuestros amiguitos en los hogares de paso.
                  <br>
                </p>
              </article>
            </div>
          </div>

          <div class="col">
            <div
              class="
                card card-cover
                h-10
                overflow-hidden
                text-grey
                bg-light
                rounded-5
                shadow-lg
              "
            >
              <article class="team-info">
                <img
                  class="img-responsive img-thumbnail"
                  src="images/team2.jpg"
                  alt=""
                />
                <p class="text-justify lead reguldisplay-6 lh-1 fw-bold">
                <br>
                  Samuel es nuestro veterinario de confianza y co-fundador de la fundación PELUDITOS,
                  es el encargado de los tratamientos médicos que requieren nuestros amiguitos.
                  <br>
                </p>
              </article>
            </div>
          </div>

          <div class="col">
            <div
              class="
                card card-cover
                h-10
                overflow-hidden
                text-grey
                bg-light
                rounded-5
                shadow-lg
              "
            >
              <article class="team-info">
                <img
                  class="img-responsive img-thumbnail"
                  src="images/team3.jpg"
                  alt=""
                />
                <p class="text-justify lead reguldisplay-6 lh-1 fw-bold">
                <br>
                  Conoce a Martha, lleva mas de 10 años vigilando el proceso de adopciones y los rescates de peluditos
                  que se encuentren en vulnerabilidad.
                  <br>
                </p>
              </article>
            </div>
          </div>

          <div class="col">
            <div
              class="
                card card-cover
                h-100
                overflow-hidden
                text-grey
                bg-light
                rounded-5
                shadow-lg
              "
            >
              <article class="team-info">
                <img
                  class="img-responsive img-thumbnail"
                  src="images/team4.jpg"
                  alt=""
                />
                <p class="text-justify lead reguldisplay-6 lh-1 fw-bold">
                <br>
                  Carlos es co-fundador de PELUDITOS, su amor por los menos favorecidos es tan grande que lucha día a día
                  por darles un espacio lleno de amor y seguridad.
                  <br>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>


<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>
    
    .servicios-imagen {
  height: 450px !important;
  margin: 10px auto 20px;
  display: block;
}

.bs-teal {
  background-color: #62f5abed;
}

.img-icon {
  height: 30%;
  width: 30%;
  display: block;
  margin: auto;
}

.nav-dos {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 12%;
  margin-bottom: 0;
  list-style: none;
}

/*Section news*/
.n1,
.n3 {
  width: 45%;
  height: 75%;
  left: 10em;
  right: 10em;
  border: 4px solid #62f5abed;
}

.n2,
.n4 {
  width: 45%;
  height: 75%;
  left: 50em;
  right: 50em;
  border: 4px solid #62f5abed;
}

#news1,
#news2,
#news3,
#news4 {
  position: backgroung;
  width: 100%;
  height: 100%;
}

.btn-outline-dark,
.btn-outline-dark:hover,
.btn-outline-dark:active,
.btn-outline-dark:visited,
.btn-outline-dark:focus {
  background-color:#62f5abed;
  border-color: #62f5abed;
  color: black;
}
</style>