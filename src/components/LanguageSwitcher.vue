<template>
    <div class="language-switcher">
      <button class="language-button" @click="toggleMenu">
        🌐
      </button>
      <div v-if="isMenuOpen" class="language-menu">
        <button @click="changeLanguage('es')">Español</button>
        <button @click="changeLanguage('en')">English</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcher',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      changeLanguage(lang) {
        this.$i18n.locale = lang;
        this.isMenuOpen = false; // Cierra el menú después de seleccionar un idioma
      },
    },
  };
  </script>
  
  <style scoped>
  .language-switcher {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
  
  .language-button {
    background-color: #00ff00;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .language-menu {
    position: absolute;
    bottom: 60px;
    right: 0;
    background-color: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .language-menu button {
    background-color: #333;
    border: none;
    color: #00ff00;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }
  
  .language-menu button:hover {
    background-color: #444;
  }
  </style>