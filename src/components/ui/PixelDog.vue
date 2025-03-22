<!-- components/PixelDog.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const dogPosition = ref({ x: 0, y: 0 });
const targetPosition = ref({ x: 0, y: 0 });
const rotation = ref(0); // Ângulo de rotação em graus
const isVisible = ref(false);
const dogImage = '/advocacia-site/images/pixel-dog-4.png';

const showDog = () => {
  // Escolhe aleatoriamente uma borda (0: esquerda, 1: direita, 2: topo, 3: fundo)
  const edge = Math.floor(Math.random() * 4);
  let startX, startY, endX, endY;

  switch (edge) {
    case 0: // Esquerda
      startX = -120; // Fora da tela
      startY = Math.random() * (window.innerHeight - 120);
      endX = 0; // Entra um pouco na tela
      endY = startY;
      rotation.value = 0; // Olhando para a direita (0°)
      break;
    case 1: // Direita
      startX = window.innerWidth + 10; // Fora da tela
      startY = Math.random() * (window.innerHeight - 120);
      endX = window.innerWidth - 120; // Entra um pouco na tela
      endY = startY;
      rotation.value = 0; // Olhando para a esquerda (180°)
      break;
    case 2: // Topo
      startX = Math.random() * (window.innerWidth - 120);
      startY = -120; // Fora da tela
      endX = startX;
      endY = 0; // Entra um pouco na tela
      rotation.value = 0; // Olhando para baixo (90°)
      break;
    case 3: // Fundo
      startX = Math.random() * (window.innerWidth - 120);
      startY = window.innerHeight + 10; // Fora da tela
      endX = startX;
      endY = window.innerHeight - 120; // Entra um pouco na tela
      rotation.value = 0; // Olhando para cima (-90° ou 270°)
      break;
  }

  // Define posição inicial
  dogPosition.value = { x: startX, y: startY };
  targetPosition.value = { x: endX, y: endY };
  isVisible.value = true;

  // Move para dentro suavemente (1 segundo)
  setTimeout(() => {
    dogPosition.value = { x: endX, y: endY };
  }, 100);

  // Após 3 segundos, move de volta para fora
  setTimeout(() => {
    dogPosition.value = { x: startX, y: startY };
  }, 3100);

  // Esconde após a animação de saída (4 segundos total)
  setTimeout(() => {
    isVisible.value = false;
    // Reaparece após 2 a 5 segundos
    setTimeout(showDog, Math.random() * 3000 + 2000);
  }, 4100);
};

onMounted(() => {
  showDog();
});

onUnmounted(() => {
  isVisible.value = false;
});
</script>

<template>
  <img
    v-if="isVisible"
    :src="dogImage"
    class="pixel-dog"
    :style="{
      left: `${dogPosition.x}px`,
      top: `${dogPosition.y}px`,
      transform: `rotate(${rotation}deg)`
    }"
  />
</template>

<style scoped>
.pixel-dog {
  position: fixed;
  z-index: 9999;
  width: 120px;
  height: auto;
  transition: left 1s ease-in-out, top 1s ease-in-out, transform 0.3s ease;
}
</style>