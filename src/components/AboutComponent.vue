<template>
    <section id="about" class="about-section">
      <h2>{{ $t('aboutMe') }}</h2>
      <p>{{ $t('aboutDescription') }}</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>
  .about-section {
    padding: 2rem;
    background-color: #1e1e1e;
    color: #00ff00;
    border-bottom: 1px solid #333;
  }
  
  .about-section h2 {
    font-family: 'Courier New', monospace;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-section p {
    font-family: 'Courier New', monospace;
    font-size: 1rem;
    line-height: 1.5;
  }
  </style>