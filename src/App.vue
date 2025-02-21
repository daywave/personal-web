<template>
  <div id="app">
    <NavbarComponent/>
    <HeaderComponent/>
    <AboutComponent/>
    <LanguageSwitcher/>
    <ExperienceComponent/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import AboutComponent from './components/AboutComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    LanguageSwitcher,
    ExperienceComponent
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Courier New', monospace;
  background-color: #1e1e1e;
  color: #00ff00;
}
</style>