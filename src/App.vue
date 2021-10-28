<template>
  <Header />
  <Contents />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Contents from "./components/Contents.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Contents,
  },
};
</script>
