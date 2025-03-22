<!-- src/components/About.vue -->
<template>
  <section id="sobre"
    class="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#333333] overflow-hidden relative">
    <!-- Balança da Justiça no fundo -->
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-balanca"></div>
    <div class="mx-auto px-4 relative z-10">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-16 text-white animate-fade-in-down">
        Sobre o Advogado
        <span
          class="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></span>
      </h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <!-- Imagem do Advogado -->
        <div class="relative flex-shrink-0 group">
          <!-- Forma de fundo dinâmica -->
          <div
            class="absolute inset-0 -z-10 bg-black/20 rounded-lg transform -rotate-6 scale-110 group-hover:scale-115 group-hover:-rotate-8 transition-all duration-500">
          </div>
          <!-- Imagem retangular -->
          <div
            class="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl shadow-yellow-500/10">
            <img :src="attorney.image" alt="Dr. Carlos Mendes"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
        <!-- Informações -->
        <div class="text-center md:text-left space-y-6">
          <h3 class="text-3xl md:text-4xl font-light text-white animate-fade-in-up delay-200">
            {{ attorney.name }}
          </h3>
          <p class="text-lg md:text-xl text-white font-medium animate-fade-in-up delay-300">
            {{ attorney.specialty }}
          </p>
          <p class="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed animate-fade-in-up delay-400">
            {{ attorney.bio }}
          </p>
          <div class="flex justify-center md:justify-start space-x-6 animate-fade-in-up delay-500">
            <a href="#"
              class="text-gray-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
              <Linkedin class="h-7 w-7" />
            </a>
            <a href="#"
              class="text-gray-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
              <Mail class="h-7 w-7" />
            </a>
            <a href="#"
              class="text-gray-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
              <Mail class="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Linkedin, Mail } from 'lucide-vue-next';
import { ref } from 'vue';

const attorney = ref({
  name: 'Dr. Valter Aparecido de Souza',
  specialty: 'Advogado',
  bio: 'Resumo Descrição',
  image: '/src/assets/images/image.jpg',
});
</script>

<style scoped>
/* Estilo para o fundo à direita */
.bg-balanca {
  background-image: url('/src/assets/images/fundo-justica.png');
  background-repeat: no-repeat;
  background-position: right center;
  /* Posiciona a imagem à direita */
  background-size: auto 100%;
  /* A imagem ocupa toda a altura da div, largura proporcional */
  filter: grayscale(100%);
}

/* Animações */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
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

/* Estilos adicionais */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.10);
}

.group:hover .group-hover\:scale-115 {
  transform: scale(1.15);
}
</style>