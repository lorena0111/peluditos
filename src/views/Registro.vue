<template>
  <div class="registro">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Registro></Registro>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Registro from '@/components/Registro.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'registro',
  components: {
    HelloWorld,
    Registro,
    Footer,
  }
}
</script>