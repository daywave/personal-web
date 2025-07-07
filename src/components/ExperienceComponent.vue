<template>
  <section id="experience" class="experience-section">
    <h2>{{ $t('experienceTitle') }}</h2>
    <div class="experience-content">
      <div class="terminal-container">
        <div class="terminal" v-for="(exp, index) in $tm('experiences')" :key="index">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="terminal-btn red"></span>
              <span class="terminal-btn yellow"></span>
              <span class="terminal-btn green"></span>
            </div>
            <span class="terminal-title">{{ exp.company }} — {{ exp.period }}</span>
          </div>
          <div class="terminal-body">
            <pre class="terminal-text">{{ formatTerminalText(exp.description) }}</pre>
            <div class="terminal-skills">
              <pre>> {{ $t('techText') }}:</pre>
              <pre>{{ formatSkills(exp.skills) }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'ExperienceComponent',
  methods: {
    formatTerminalText(text) {
      return `> ${text.replace(/\. /g, '.\n> ')}`;
    },
    formatSkills(skills) {
      return skills.split(',').map(skill => `- ${skill.trim()}`).join('\n');
    }
  },
  mounted() {
    // Animación para las terminales
    gsap.from('.terminal', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out'
    });

    // Animación del teléfono
    gsap.from('.phone', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      ease: 'power2.out',
    });

    if (this.$refs.kotlinText) {
      gsap.from(this.$refs.kotlinText, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });
    }

    if (this.$refs.dartText) {
      gsap.from(this.$refs.dartText, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 1.8,
        ease: 'power2.out',
      });
    }
  }
};
</script>

  
  <style scoped>
  .experience-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.terminal-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
}

.terminal {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  color: #f0f0f0;
  font-family: 'Courier New', monospace;
}

.terminal-header {
  display: flex;
  align-items: center;
  background: #3a3a3a;
  padding: 0.5rem 1rem;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.terminal-btn.red { background: #ff5f56; }
.terminal-btn.yellow { background: #ffbd2e; }
.terminal-btn.green { background: #27c93f; }

.terminal-title {
  font-size: 0.85rem;
  color: #aaa;
}

.terminal-body {
  padding: 1.5rem;
}

.terminal-text {
  margin: 0;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #e0e0e0;
}

.terminal-skills {
  margin-top: 1.5rem;
  color: #4fc3f7;
}

.terminal-skills pre {
  margin: 0.5rem 0;
}

  
  .phone-animation {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .phone {
    width: 150px;
    height: 300px;
    background-color: #333;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .screen {
    width: 90%;
    height: 90%;
    background-color: #000;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .language-text {
    text-align: center;
  }
  
  .language-text span {
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
    color: #00ff00;
    display: block;
    margin: 0.5rem 0;
  }
  </style>