<!-- components/PixelDog.vue -->
<script setup>
import { onMounted, ref } from 'vue';
import PixelDogImage from '/advocacia-site/images/pixel-dog.png'; // Importa a imagem

// Posição e direção do cachorro
const dogPosition = ref({ x: 0, y: 0 });
const direction = ref(1); // 1 para direita, -1 para esquerda
const speed = 2;

onMounted(() => {
    // Define posição inicial aleatória
    dogPosition.value.y = Math.random() * (window.innerHeight - 100);

    // Função de animação
    const animate = () => {
        dogPosition.value.x += speed * direction.value;

        // Verifica limites da tela e inverte direção
        if (dogPosition.value.x > window.innerWidth - 50) {
            direction.value = -1;
        } else if (dogPosition.value.x < 0) {
            direction.value = 1;
        }

        requestAnimationFrame(animate);
    };

    animate();
});
</script>

<template>
    <img :src="PixelDogImage" class="pixel-dog" :style="{
        left: `${dogPosition.x}px`,
        top: `${dogPosition.y}px`,
        transform: `scaleX(${direction})`
    }" />
</template>

<style scoped>
.pixel-dog {
    position: fixed;
    z-index: 9999;
    width: 100px;
    /* Ajuste o tamanho conforme sua imagem */
    height: auto;
    transition: transform 0.1s ease;
}
</style>