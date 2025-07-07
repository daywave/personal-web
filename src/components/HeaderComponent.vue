<template>
  <header class="header">
    <div class="terminal">
      <div class="terminal-header">
        <div class="buttons">
          <span class="button close"></span>
          <span class="button minimize"></span>
          <span class="button maximize"></span>
        </div>
        <div class="title">zsh</div>
      </div>
      <div class="terminal-body">
        <p class="command-line">
          <span class="user">ddaywave</span>
          <span class="path">~</span>
          <span class="prompt">$</span>
          <span ref="typedElement" class="typed"></span>
        </p>
        <p ref="developerText" class="developer-text"></p>
      </div>
    </div>
    <div class="profile-icon">
      <img src="@/assets/icon.jpg" alt="Your Icon" />
    </div>
  </header>
</template>

<script>
import Typed from 'typed.js';
import { gsap } from 'gsap';

export default {
  name: 'HeaderComponent',
  mounted() {

        // Animación con GSAP
        const developerText = this.$refs.developerText;
    gsap.from(developerText, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 2, // Espera 2 segundos antes de comenzar
      onComplete: () => {
        developerText.textContent = this.$t('developerText');
      },
    });
    // Simulación de comandos en la terminal
    new Typed(this.$refs.typedElement, {
      strings: [
        'flutter create landing_page',
        'git commit -m "Initial commit"',
        'flutter emulators',
        'git branch -all',
        'flutter run',
        'npm run dev',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #1e1e1e;
  color: #00ff00;
  border-bottom: 1px solid #333;
  gap: 2rem;
}

.terminal {
  width: 40%;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Courier New', monospace;
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #333;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

.button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #555;
}

.button.close {
  background-color: #ff5f56;
}

.button.minimize {
  background-color: #ffbd2e;
}

.button.maximize {
  background-color: #27c93f;
}

.terminal-body {
  padding: 1rem;
}

.command-line {
  margin: 0;
}

.user {
  color: #00ff00;
}

.path {
  color: #00cc00;
}

.prompt {
  color: #00ff00;
  margin: 0 0.5rem;
}

.typed {
  color: #00ff00;
}

.developer-text {
  margin: 1rem 0 0 0;
  font-size: 1.2rem;
  color: #00ff00;
}

.profile-icon img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #00ff00;
}
</style>