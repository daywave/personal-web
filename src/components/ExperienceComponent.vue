<template>
    <section id="experience" class="experience-section">
      <h2>{{ $t('experienceTitle') }}</h2>
      <div class="experience-content">
        <div class="experience-list">
          <div class="experience-item" v-for="(exp, index) in experiences" :key="index">
            <h3>{{ exp.company }} <span class="period">[{{ exp.period }}]</span></h3>
            <p>{{ exp.description }}</p>
            <p>{{ $t('experienceDescription') }}</p>
          </div>
        </div>
        <div class="phone-animation">
          <div class="phone">
            <div class="screen">
              <div class="language-text">
                <span ref="kotlinText">Kotlin</span>
                <span ref="dartText">Dart</span>
                <span ref="vueText">VueJs</span>
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
    data() {
      return {
        experiences: [
          {
            company: 'Nombre Empresa 1',
            period: 'Ene 2022 - Dic 2022',
            description: 'Desarrollé aplicaciones móviles nativas para Android utilizando Kotlin y Jetpack Compose, integrando APIs REST y Firebase para la gestión de datos.',
          },
          {
            company: 'Nombre Empresa 2',
            period: 'Mar 2021 - Dic 2021',
            description: 'Colaboré en el desarrollo de una aplicación educativa multiplataforma usando Flutter (Dart), implementando funcionalidades como autenticación y bases de datos locales.',
          },
        ],
      };
    },
    mounted() {
      // Animación del teléfono móvil
      gsap.from('.phone', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
  
      // Animación de los textos dentro del teléfono
      gsap.from(this.$refs.kotlinText, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power2.out',
      });
  
      gsap.from(this.$refs.dartText, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });
  
      // Efecto de parpadeo en los textos
      gsap.to([this.$refs.kotlinText, this.$refs.dartText, this.$refs.vueText], {
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    },
  };
  </script>
  
  <style scoped>
  .experience-section {
    padding: 2rem;
    background-color: #1e1e1e;
    color: #00ff00;
    border-bottom: 1px solid #333;
  }
  
  .experience-section h2 {
    font-family: 'Courier New', monospace;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .experience-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  
  .experience-list {
    flex: 1;
  }
  
  .experience-item {
    margin-bottom: 1.5rem;
  }
  
  .experience-item h3 {
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
    color: #00ff00;
    margin-bottom: 0.5rem;
  }
  
  .experience-item .period {
    color: #00cc00;
    font-size: 0.9rem;
  }
  
  .experience-item p {
    font-family: 'Courier New', monospace;
    font-size: 1rem;
    line-height: 1.5;
    color: #00ff00;
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