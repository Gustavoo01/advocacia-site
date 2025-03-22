<!-- src/components/Hero.vue -->
<template>
  <section id="inicio" class="hero-section text-white relative overflow-hidden">
    <div class="background-slideshow">
      <div class="slide" style="background-image: url('/images/hero-bg-1.jpg');"></div>
      <div class="slide" style="background-image: url('/images/hero-bg-2.jpg');"></div>
      <div class="slide" style="background-image: url('/images/hero-bg-3.jpg');"></div>
    </div>
    <div
      class="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10 min-h-screen">
      <img src="/src/assets/images/logo.png" alt="" class="logo animate-fade-in-down">
      <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight animate-fade-in-down">
        ADVOCACIA
        <span
          class="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/50 rounded-full"></span>
      </h1>
      <p class="text-xl md:text-2xl max-w-3xl mb-10 font-extralight animate-fade-in-up">
        Soluções jurídicas
      </p>
      <div class="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
        <button @click="scrollToSection('contato')"
          class="btn-primary bg-black text-white font-light py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          Agende uma Consulta
        </button>
        <button @click="scrollToSection('servicos')"
          class="btn-secondary bg-black text-white font-light py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          Conheça Nossos Serviços
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
.logo {
  width: 80px;
  margin-bottom: 20px;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  background-color: transparent;
}

.background-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.slide {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: slideShow 18s infinite ease-in-out;
}

.slide:nth-child(1) {
  animation-delay: 0s;
}

.slide:nth-child(2) {
  animation-delay: 6s;
}

.slide:nth-child(3) {
  animation-delay: 12s;
}

@keyframes slideShow {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  16.67% {
    opacity: 1;
    transform: translateY(0);
  }

  33.33% {
    opacity: 1;
    transform: translateY(0);
  }

  50% {
    opacity: 0;
    transform: translateY(-10%);
  }

  100% {
    opacity: 0;
    transform: translateY(-10%);
  }
}

/* Camada de gradiente para um toque moderno */
.background-slideshow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

/* Conteúdo acima do fundo */
.hero-section>.container {
  position: relative;
  z-index: 10;
}

/* Estilização dos botões */
.btn-primary {
  background: linear-gradient(135deg, #1a1a1a, #333333);
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #333333, #4d4d4d);
  transform: translateY(-2px);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn-secondary {
  background: linear-gradient(135deg, #1a1a1a, #333333);
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #333333, #4d4d4d);
  transform: translateY(-2px);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn-secondary:hover::before {
  width: 300px;
  height: 300px;
}

/* Animações de entrada */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>