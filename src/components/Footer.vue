<template>
    <div class="footer">

        
    <!-- Footer -->
    <div class="container">
      <footer class="footer-section">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <p class="text-center text-muted">© 2021 Proyecto Peluditos</p>
          </li>
        </ul>
        <a
              href="https://github.com/DiegoxK/G23_ProyectoG7_Ciclo3"
              target="_blank"
              class="nav-link px-2 text-muted text-center"
              >GitHub!</a
            >
        <p class="text-muted">
          Diego Steven Suarez Salgado - diego.stv@hotmail.com <br />
          Laura Mantilla Jaimes - LALA9086@hotmail.com <br />
          Julián Camilo García Rincón - jcgrrincon@hotmail.com <br />
          Lorena Gutiérrez Giraldo - lgugi21@hotmail.com <br />
          Jhon Alejandro Gaspar - jhongaspar2021@hotmail.com
        </p>
      </footer>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style>
    .footer-section {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
</style>