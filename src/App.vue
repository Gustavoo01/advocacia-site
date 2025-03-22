<script setup>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import FloatingButton from './components/ui/FloatingButton.vue';
import PixelDog from './components/ui/PixelDog.vue';

const handleButtonClick = () => {
  window.open('https://wa.me/44999046190', '_blank');
};
</script>

<template>
  <div class="font-sans text-gray-800">
    <Header />
    <Hero class="mt-15" />
    <Services />
    <About />
    <Contact />
    <Footer />
    <FloatingButton @click="handleButtonClick" />
    <PixelDog />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>