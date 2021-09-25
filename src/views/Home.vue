<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    Footer,
  }
}
</script>
