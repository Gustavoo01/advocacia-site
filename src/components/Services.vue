<script setup>
import { Briefcase, FileText, Home, Scale, Shield, Users } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const services = ref([
  {
    icon: Scale,
    title: 'Direito Previdenciário',
    image: '/advocacia-site/images/direito-previdenciario.jpg'
  },
  {
    icon: Briefcase,
    title: 'Direito Civil',
    image: '/advocacia-site/images/direito-civil.jpg'
  },
  {
    icon: FileText,
    title: 'Direito da Família',
    image: '/advocacia-site/images/direito-familia.jpg'
  },
  {
    icon: Users,
    title: 'Direito das Sucessões',
    image: '/advocacia-site/images/direito-sucessoes.jpg'
  },
  {
    icon: Home,
    title: 'Direito Eleitoral',
    image: '/advocacia-site/images/direito-eleitoral.jpg'
  },
  {
    icon: Shield,
    title: 'Direito Ambiental',
    image: '/advocacia-site/images/direito-ambiental.jpg'
  }
]);

const carouselTrack = ref(null);

onMounted(() => {
  const track = carouselTrack.value;
  if (track) {
    const itemWidth = 72 * 16 + 32; // w-72 (288px) + mx-4 (32px) em pixels
    const totalWidth = itemWidth * services.value.length;
    track.style.width = `${totalWidth}px`;
    const duration = services.value.length * 5; // 5s por item
    track.style.animationDuration = `${duration}s`;
  }
});
</script>

<template>
  <section id="servicos" class="py-20 overflow-hidden"
    :style="{ background: 'radial-gradient(circle, rgba(17,17,17,1) 0%, rgba(23,23,23,1) 35%, rgba(31,31,31,1) 100%)' }">
    <div class="w-full">
      <h2 class="text-4xl md:text-5xl font-light text-center text-white mb-16 tracking-tight animate-fade-in-down">
        Nossos Serviços Jurídicos
        <span
          class="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></span>
      </h2>
      <div class="relative">
        <!-- Carrossel -->
        <div class="carousel-container flex overflow-hidden">
          <div class="carousel-track flex" ref="carouselTrack">
            <div v-for="(service, index) in services" :key="index"
              class="carousel-item flex-shrink-0 w-72 h-96 mx-4 group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <!-- Imagem de fundo -->
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                :style="{ backgroundImage: `url(${service.image})` }"></div>
              <!-- Camada de gradiente -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <!-- Ícone e Título -->
              <div class="relative z-10 flex flex-col items-center justify-end p-6 h-full text-white">
                <div
                  class="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/25">
                  <component :is="service.icon" class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-center tracking-wide">{{ service.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.w-full {
  width: 100vw;
}

.carousel-container {
  width: 100%;
  mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
    linear-gradient(to top, transparent 0%, black 20%);
}

.carousel-track {
  display: flex;
  animation: slideBackAndForth linear infinite;
}

.carousel-item {
  flex: 0 0 auto;
  width: 18rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.carousel-item:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

@keyframes slideBackAndForth {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(calc(-100% + 100vw));
  }

  100% {
    transform: translateX(0);
  }
}

.carousel-track:hover {
  animation-play-state: paused;
}

/* Animações de entrada */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
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
</style>