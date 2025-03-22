<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu(); // Fecha o menu no mobile após clicar
    }
};
</script>

<template>
    <nav class="menu fixed top-0 left-0 w-full p-4 shadow-lg z-50">
        <div class="container mx-auto flex items-center justify-between">
            <!-- Título -->
            <div class="text-3xl font-light tracking-wide text-white">
                ADVOCACIA
                <!-- Logo ao lado do título apenas em mobile -->
                <img src="/src/assets/images/logo.png" alt="Logo" class="logo-mobile md:hidden inline-block ml-3" />
            </div>

            <!-- Logo centralizada em desktop -->
            <div class="hidden md:flex flex-1 justify-center">
                <img src="/src/assets/images/logo.png" alt="Logo" class="logo-desktop" />
            </div>

            <!-- Toggle Menu para mobile -->
            <button @click="toggleMenu" class="md:hidden focus:outline-none toggle-btn" aria-label="Toggle menu">
                <span class="toggle-icon"></span>
            </button>

            <!-- Informações do advogado (desktop) -->
            <div class="hidden md:block text-right leading-tight">
                <div class="font-medium text-base text-white">Dr. Valter Aparecido de Souza</div>
                <div class="text-xs text-gray-400">Advogado - OAB/PR N 69517</div>
                <div class="text-xs text-gray-400">Assessoria e consultoria</div>
            </div>
        </div>

        <!-- Menu de navegação -->
        <div :class="['nav-menu', { 'active': isMenuOpen }]" class="md:mt-4">
            <div class="separator-wrapper md:block hidden">
                <div class="separator"></div>
            </div>
            <div
                class="nav-links container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
                <a href="#inicio" class="nav-link" @click.prevent="scrollToSection('inicio')">Início</a>
                <a href="#servicos" class="nav-link" @click.prevent="scrollToSection('servicos')">Serviços</a>
                <a href="#sobre" class="nav-link" @click.prevent="scrollToSection('sobre')">Sobre Nós</a>
                <a href="#contato" class="nav-link" @click.prevent="scrollToSection('contato')">Contato</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.menu {
    background: radial-gradient(circle, rgba(17, 17, 17, 1) 0%, rgba(23, 23, 23, 1) 35%, rgba(31, 31, 31, 1) 100%);
    color: #fff;
    padding-bottom: 1rem;
}

/* Logo Mobile (ao lado do título) */
.logo-mobile {
    width: 40px;
    height: 40px;
    vertical-align: middle;
}

/* Logo Desktop (centralizada) */
.logo-desktop {
    width: 50px;
    height: 50px;
}

/* Toggle Button */
.toggle-btn {
    position: relative;
    width: 35px;
    height: 30px;
    background: transparent;
    cursor: pointer;
}

.toggle-icon,
.toggle-icon:before,
.toggle-icon:after {
    position: absolute;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.toggle-icon {
    top: 50%;
    transform: translateY(-50%);
}

.toggle-icon:before {
    content: '';
    top: -10px;
}

.toggle-icon:after {
    content: '';
    top: 10px;
}

.toggle-btn.active .toggle-icon {
    background: transparent;
}

.toggle-btn.active .toggle-icon:before {
    transform: translateY(10px) rotate(45deg);
}

.toggle-btn.active .toggle-icon:after {
    transform: translateY(-10px) rotate(-45deg);
}

/* Menu de navegação */
.nav-menu {
    display: none;
}

.nav-menu.active {
    display: block;
    background: rgba(26, 26, 26, 0.95);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    backdrop-filter: blur(5px);
    animation: slideDown 0.3s ease-out;
}

@media (min-width: 768px) {
    .nav-menu {
        display: block;
        position: static;
        background: transparent;
    }

    .toggle-btn {
        display: none;
    }
}

/* Separator */
.separator-wrapper {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}

.separator {
    width: 50%;
    height: 2px;
    background-color: rgb(60, 60, 60);
}

/* Links */
.nav-link {
    position: relative;
    font-size: 1rem;
    font-weight: 300;
    color: #e0e0e0;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    transition: color 0.3s ease;
    text-align: center;
}

.nav-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #ffffff;
    transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover {
    color: #ffffff;
}

.nav-link:hover::after {
    width: 100%;
    left: 0;
}

/* Animation */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>