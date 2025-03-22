<!-- src/components/Contact.vue -->
<template>
    <section id="contato" class="py-20 bg-stone-900 relative overflow-hidden ">
        <!-- Balança da Justiça no fundo - Esquerda -->
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-balanca-left"></div>
        <!-- Balança da Justiça no fundo - Direita -->
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-balanca-right"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-light text-white mb-8 relative">
                    Entre em Contato
                    <span
                        class="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></span>
                </h2>
                <p class="text-gray-400 text-lg mb-10 leading-relaxed">
                    Estamos aqui para ajudar você. Entre em contato conosco para esclarecer suas dúvidas ou agendar uma
                    consulta.
                </p>

                <!-- Botão com ícone do WhatsApp -->
                <a href="https://wa.me/44999046190" target="_blank"
                    class="btn-primary flex items-center justify-center gap-2">
                    <Phone class="w-5 h-5" />
                    Fale Conosco
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Phone } from 'lucide-vue-next';
</script>

<style scoped>
/* Estilo para o fundo à esquerda */
.bg-balanca-left {
    background-image: url('/src/assets/images/pilar.png');
    background-repeat: no-repeat;
    background-position: left center;
    /* Imagem alinhada à esquerda */
    background-size: 40% 135%;
    /* 50% da largura, 100% da altura */
    filter: grayscale(100%);
    /* Efeito de escala de cinza */
}

/* Estilo para o fundo à direita */
.bg-balanca-right {
    background-image: url('/src/assets/images/pilar.png');
    background-repeat: no-repeat;
    background-position: right center;
    /* Imagem alinhada à direita */
    background-size: 40% 135%;
    /* 50% da largura, 100% da altura */
    filter: grayscale(100%);
    /* Efeito de escala de cinza */
}

/* Estilo do botão */
.btn-primary {
    display: inline-flex;
    padding: 14px 32px;
    background: linear-gradient(135deg, #1a1a1a, #333333);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

/* Efeito de expansão */
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
    transition: width 0.5s ease, height 0.5s ease;
}

.btn-primary:hover::before {
    width: 250px;
    height: 250px;
    opacity: 0.3;
}

/* Efeito de clique */
.btn-primary:active {
    transform: scale(0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Estilo responsivo */
@media (max-width: 768px) {
    .bg-balanca-left {
        background-position: left center;
        /* Alinha ao topo e à esquerda */
        background-size: 60% 140%;
        /* Mantém 50% da largura e 100% da altura */
    }

    .bg-balanca-right {
        background-position: right center;
        /* Alinha ao topo e à direita */
        background-size: 60% 140%;
        /* Mantém 50% da largura e 100% da altura */
    }

    .btn-primary {
        width: 100%;
        padding: 12px 0;
    }
}

/* Ajuste para telas menores (ex.: mobile pequeno) */
@media (max-width: 480px) {
    .bg-balanca-left {
        background-position: left center;
        background-size: 60% 140%;
        /* Mantém a altura total */
    }

    .bg-balanca-right {
        background-position: right center;
        background-size: 60% 140%;
        /* Mantém a altura total */
    }
}
</style>