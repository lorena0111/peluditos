<template>
    <div class="usuario">
        <main class="form-signin border border-teal rounded-3 text-center">
        <form>
          <img class="mb-4" src="images/icons8-dog-100.jpg" alt="" width="90" height="80">
          <h1 class="h3 mb-3 fw-normal">Inicio de Sesión</h1>

          <div class="form-floating">
            <input type="email" class="form-control border-teal" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Correo Electronico</label>
          </div>

          <div class="form-floating mt-3">
            <input type="password" class="form-control border-teal" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="mt-3">
          <button class="w-100 btn btn-lg btn-outline-teal" type="submit">Sign in</button>
            </div>
          <div class="mt-3">
            <a class="text-secondary" href="/src/register.html">Registrar cuenta</a>
          </div>
        </form>
      </main>
    </div>
</template>

<script>
export default {
  name: 'Usuario',
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