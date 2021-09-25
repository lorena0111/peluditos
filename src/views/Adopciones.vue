<template>
  <div class="adopciones">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Adopciones></Adopciones>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Adopciones from '@/components/Adopciones.vue'
import Footer from '@/components/Footer.vue';
export default {
  name: 'adopciones',
  components: {
    HelloWorld,
    Adopciones,
    Footer,
  }
}
</script>
