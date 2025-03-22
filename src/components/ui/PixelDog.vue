<!-- components/PixelDog.vue -->
<script setup>
import { onMounted, ref } from 'vue';

const dogPosition = ref({ x: 0, y: 0 });
const direction = ref(1);
const speed = 2;
const dogImage = '/advocacia-site/images/pixel-dog.png';

onMounted(() => {
    dogPosition.value.y = Math.random() * (window.innerHeight - 100);

    const animate = () => {
        dogPosition.value.x += speed * direction.value;

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
    <img :src="dogImage" class="pixel-dog" :style="{
        left: `${dogPosition.x}px`,
        top: `${dogPosition.y}px`,
        transform: `scaleX(${direction})`
    }" />
</template>

<style scoped>
.pixel-dog {
    position: fixed;
    z-index: 9999;
    width: 120px;
    height: auto;
    transition: transform 0.1s ease;
}
</style>