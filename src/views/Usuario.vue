<template>
  <div class="usuario">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Usuario></Usuario>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Usuario from '@/components/Usuario.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'usuario',
  components: {
    HelloWorld,
    Usuario,
    Footer,
  }
}
</script>