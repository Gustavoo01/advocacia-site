<script setup>
import { Mail, MapPin, Phone } from 'lucide-vue-next';
</script>

<template>
    <footer class="rodape text-white py-12 relative overflow-hidden">
        <!-- Balança da Justiça no fundo -->
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-balanca"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid md:grid-cols-4 gap-12">
                <!-- Logo e Descrição -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4 text-white">ADVOCACIA</h3>
                    <p class="text-white mb-4 leading-relaxed font-light">
                        Soluções jurídicas personalizadas para proteger seus direitos e interesses.
                    </p>
                </div>

                <!-- Contato -->
                <div>
                    <h3 class="text-xl font-normal mb-4 text-white">Contato</h3>
                    <ul class="space-y-3 ">
                        <li class="flex items-start">
                            <MapPin class="icon mr-3" />
                            <span>Rua São Paulo, 123 - Centro, Roncador - PR</span>
                        </li>
                        <li class="flex items-center ">
                            <Phone class="icon mr-3" />
                            <span>(44) 99999-9999</span>
                        </li>
                        <li class="flex items-center">
                            <Mail class="icon mr-3" />
                            <span>advocaciavirtual@hotmail.com</span>
                        </li>
                        <li class="flex items-center">
                            <Mail class="icon mr-3" />
                            <span>advocaciavirtual8@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <!-- Horário de Atendimento -->
                <div>
                    <h3 class="text-xl font-normal mb-4 text-white">Horário de Atendimento</h3>
                    <p class="text-white mb-2">Segunda a Sexta: 12h às 00h</p>
                </div>

                <!-- Localização (Google Maps) -->
                <div>
                    <h3 class="text-xl font-normal mb-4 text-white">Localização</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4336.316879248634!2d-52.27690712395727!3d-24.597188878102113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eddbff32f3323d%3A0xd53080e8c4a724bb!2sR.%20S%C3%A3o%20Paulo%2C%20626%20-%20Centro%2C%20Roncador%20-%20PR%2C%2087320-000!5e1!3m2!1spt-BR!2sbr!4v1742005695260!5m2!1spt-BR!2sbr"
                        width="100%" height="180" style="border:0;" allowfullscreen="yes" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <!-- Linha e direitos autorais -->
            <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300 text-sm">
                © {{ new Date().getFullYear() }} Advocacia. Todos os direitos reservados.
            </div>
        </div>
    </footer>
</template>

<style scoped>
.rodape {
    background: radial-gradient(circle, rgba(17, 17, 17, 1) 0%, rgba(23, 23, 23, 1) 35%, rgba(31, 31, 31, 1) 100%);
    color: #fff;
}

/* Estilo para o fundo à esquerda */
.bg-balanca {
    background-image: url('/src/assets/images/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    /* Posiciona à esquerda por padrão */
    background-size: auto 100%;
    /* Altura total, largura proporcional */
    filter: grayscale(100%);
}

/* Ícones sociais e de contato */
.icon {
    width: 20px;
    height: 20px;
    color: #e0e0e0;
    transition: color 0.3s ease;
}

.social-link:hover .icon {
    color: #facc15;
}

/* Hover nos textos */
ul li span {
    color: #ccc;
    transition: color 0.3s ease;
}

/* Link de navegação responsivo */
@media (max-width: 768px) {
    .rodape {
        text-align: center;
    }

    .bg-balanca {
        background-position: center top;
        /* Centraliza horizontalmente e alinha ao topo */
        background-size: 80% auto;
        /* Reduz a largura para 80% em telas menores */
        max-height: 100%;
        /* Garante que não exceda a altura do footer */
    }

    .grid {
        grid-template-columns: 1fr;
    }

    iframe {
        height: 200px;
    }
}

/* Ajuste para telas ainda menores (ex.: mobile pequeno) */
@media (max-width: 480px) {
    .bg-balanca {
        background-size: 100% auto;
        /* Aumenta para 100% em telas muito pequenas */
        background-position: center top;
    }
}
</style>