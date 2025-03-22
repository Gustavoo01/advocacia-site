<template>
    <section id="depoimentos" class="py-16 bg-slate-800 text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-slate-700 p-6 rounded-lg">
                    <div class="flex mb-4">
                        <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
                    </div>
                    <p class="italic mb-6">"{{ testimonial.text }}"</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gray-500 mr-4">
                            <img :src="testimonial.image" alt="Client"
                                class="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                            <h4 class="font-semibold">{{ testimonial.name }}</h4>
                            <p class="text-sm text-gray-300">{{ testimonial.case }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next';
import { ref } from 'vue';

const testimonials = ref([
    {
        text: 'O atendimento foi excepcional. Resolveram meu caso de forma rápida e eficiente, sempre me mantendo informado sobre cada etapa do processo.',
        name: 'João Silva',
        case: 'Caso de Direito do Consumidor',
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        text: 'Profissionais extremamente competentes. Conseguiram uma solução favorável para minha empresa em um litígio que parecia impossível de resolver.',
        name: 'Maria Costa',
        case: 'Caso Empresarial',
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        text: 'Atendimento humanizado e resultados excelentes. Recomendo fortemente para questões familiares, especialmente divórcios consensuais.',
        name: 'Pedro Almeida',
        case: 'Caso de Direito de Família',
        image: '/placeholder.svg?height=100&width=100'
    }
]);
</script>