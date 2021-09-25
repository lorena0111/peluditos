<template>
    <div class="registro">
      <main class="form-signin border border-teal rounded-3 text-center">
        <form>
          <img class="mb-4" src="images/icons8-dog-100.jpg" alt="" width="90" height="80">
          <h1 class="h3 mb-3 fw-normal">Registrate</h1>

          <div class="form-floating">
            <input type="text" class="form-control border-teal" id="Input-name" placeholder="Nombre">
            <label for="Input-name">Nombre</label>
          </div>

          <div class="form-floating mt-3">
            <input type="text" class="form-control border-teal" id="Input-lastname" placeholder="Apellido">
            <label for="Input-lastname">Apellido</label>
          </div>

          <div class="form-floating mt-3">
            <input type="email" class="form-control border-teal" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Correo Electronico</label>
          </div>

          <div class="form-floating mt-3">
            <input type="tel" class="form-control border-teal" id="Input-phonenumber" placeholder="Telefono">
            <label for="Input-phonenumber">Telefono</label>
          </div>

        <div class="form-floating mt-3">
        <select class="form-select border-teal" id="validationCustom04" required>
            <option selected disabled value="">Tipo de vivienda</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Finca o parcela</option>
            </select>
        </div> 
        
        <div class="form-floating mt-3">
            <select class="form-select border-teal" id="validationCustom05" required>
                <option selected disabled value="">¿Tiene mascota?</option>
                <option>Si</option>
                <option>No</option>
                </select>
            </div>

                <div>
                    <p class=" mb-3 fw-normal mt-3">Si seleccionaste la opción "Si", llena el siguiente formulario</p>
                </div>
                <hr
            <div class="group-floating mt-3">
                <div class="form-floating mt-3">
                    <input type="number" class="form-control border-teal" id="Input-Edad" placeholder="Edad (En años)">
                    <label for="Input-Edad">Edad (En año humano)</label>
                  </div>
                <div class="form-floating mt-3">
                <select class="form-select border-teal" id="validationCustom06" required>
                    <option selected disabled value="">¿Castrada?</option>
                    <option>Si</option>
                    <option>No</option>
                    </select>
                </div>
                <hr
            </div>
            

          <div class="form-floating mt-5">
            <input type="password" class="form-control border-teal" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
            </div>
            <div>
          <button class="w-100 btn btn-lg btn-outline-teal" type="submit">Registrar Cuenta</button>
            </div>

            <div class="mt-3">
          <a class="text-secondary " href="/src/login.html">Ya tienes cuenta?</a>
            </div>

        </form>
      </main>
    </div>
</template>

<script>
export default {
  name: 'Registro',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
    
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }

          /*Sección login*/

          html,
          body {
            height: 100%;
          }

          body {
            display: flex;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
          }

          .form-signin {
             width: 100%;
             max-width: 330px;
             padding: 15px;
              margin: auto;
            }

          .form-signin .checkbox {
            font-weight: 400;
          }

          .form-signin .form-floating:focus-within {
             z-index: 2;
          }

          .form-signin input[type="email"] {
             margin-bottom: -1px;
              border-bottom-right-radius: 0;
               border-bottom-left-radius: 0;
              }

          .form-signin input[type="password"] {
              margin-bottom: 10px;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }



          .border-teal {
            border-color: #62f5abed !important;
            }
            .btn-outline-teal {
                 color: #62f5abed;
                border-color: #62f5abed;
                }

            .btn-outline-teal:hover {
                 color: #fff;
                background-color: #62f5abed;
                border-color: #62f5abed;
                }

            .btn-check:focus + .btn-outline-teal,
            .btn-outline-teal:focus {
                -webkit-box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
                box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
                }

            .btn-check:checked + .btn-outline-teal,
            .btn-check:active + .btn-outline-teal,
            .btn-outline-teal:active,
            .btn-outline-teal.active,
            .btn-outline-teal.dropdown-toggle.show {
                color: #fff;
                background-color: #62f5abed;
                border-color: #62f5abed;
                }

            .btn-check:checked + .btn-outline-teal:focus,
            .btn-check:active + .btn-outline-teal:focus,
            .btn-outline-teal:active:focus,
            .btn-outline-teal.active:focus,
            .btn-outline-teal.dropdown-toggle.show:focus {
                -webkit-box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
                box-shadow: 0 0 0 0.25rem rgba(77, 243, 188, 0.904);
                }

            .btn-outline-teal:disabled,
            .btn-outline-teal.disabled {
                color: #fff;
                background-color: transparent;
                }
            
            
                
      </style>
