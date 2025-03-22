<!-- components/PixelDog.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const dogPosition = ref({ x: 0, y: 0 });
const targetPosition = ref({ x: 0, y: 0 });
const direction = ref(1); // 1 para direita, -1 para esquerda
const isVisible = ref(false);
const isShaking = ref(false); // Controla o tremor
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
      direction.value = 1; // Olhando para a direita (centro da tela)
      break;
    case 1: // Direita
      startX = window.innerWidth + 10; // Fora da tela
      startY = Math.random() * (window.innerHeight - 120);
      endX = window.innerWidth - 120; // Entra um pouco na tela
      endY = startY;
      direction.value = -1; // Olhando para a esquerda (centro da tela)
      break;
    case 2: // Topo
      startX = Math.random() * (window.innerWidth - 120);
      startY = -120; // Fora da tela
      endX = startX;
      endY = 0; // Entra um pouco na tela
      direction.value = 1; // Olhando para a direita (padrão)
      break;
    case 3: // Fundo
      startX = Math.random() * (window.innerWidth - 120);
      startY = window.innerHeight + 10; // Fora da tela
      endX = startX;
      endY = window.innerHeight - 120; // Entra um pouco na tela
      direction.value = 1; // Olhando para a direita (padrão)
      break;
  }

  // Define posição inicial
  dogPosition.value = { x: startX, y: startY };
  targetPosition.value = { x: endX, y: endY };
  isVisible.value = true;
  isShaking.value = false;

  // Move para dentro com "bounce" (1 segundo)
  setTimeout(() => {
    dogPosition.value = { x: endX, y: endY };
  }, 100);

  // Ativa o tremor após 2.5 segundos (pouco antes de sair)
  setTimeout(() => {
    isShaking.value = true;
  }, 2500);

  // Para o tremor e move de volta para fora após 3 segundos
  setTimeout(() => {
    isShaking.value = false;
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
    :class="{ 'pixel-dog': true, 'shake': isShaking }"
    :style="{
      left: `${dogPosition.x}px`,
      top: `${dogPosition.y}px`,
      transform: `scaleX(${direction})`
    }"
  />
</template>

<style scoped>
.pixel-dog {
  position: fixed;
  z-index: 9999;
  width: 120px;
  height: auto;
  transition: left 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), 
             top 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), 
             transform 0.3s ease;
}

/* Animação de tremor aprimorada */
.shake {
  animation: shake 0.6s ease-in-out;
}

@keyframes shake {
  0% { transform: scaleX(var(--direction)) translate(0, 0); }
  10% { transform: scaleX(var(--direction)) translate(-8px, -5px) rotate(-5deg); } /* Pulo inicial */
  20% { transform: scaleX(var(--direction)) translate(6px, 2px) rotate(4deg); }
  30% { transform: scaleX(var(--direction)) translate(-5px, -3px) rotate(-3deg); }
  40% { transform: scaleX(var(--direction)) translate(4px, 1px) rotate(2deg); }
  50% { transform: scaleX(var(--direction)) translate(-3px, -2px) rotate(-2deg); }
  60% { transform: scaleX(var(--direction)) translate(2px, 0px) rotate(1deg); }
  70% { transform: scaleX(var(--direction)) translate(-2px, -1px) rotate(-1deg); }
  80% { transform: scaleX(var(--direction)) translate(1px, 0px) rotate(0deg); }
  90% { transform: scaleX(var(--direction)) translate(-1px, 0px) rotate(0deg); }
  100% { transform: scaleX(var(--direction)) translate(0, 0); }
}
</style>