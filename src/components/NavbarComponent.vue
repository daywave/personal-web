<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="logo">Donovan Jerez</span>
    </div>
    <ul class="navbar-links">
      <li><a href="#about">{{ $t('about') }}</a></li>
      <li><a href="#projects">{{ $t('projects') }}</a></li>
      <li><a href="#skills">{{ $t('skills') }}</a></li>
      <li><a href="#contact">{{ $t('contact') }}</a></li>
    </ul>
  </nav>
</template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1e1e1e;
    color: #00ff00;
    border-bottom: 1px solid #333;
  }
  
  .navbar-brand .logo {
    font-family: 'Courier New', monospace;
    font-size: 1.5rem;
    font-weight: bold;
    color: #00ff00;
  }
  
  .navbar-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar-links li {
    margin-left: 2rem;
  }
  
  .navbar-links a {
    color: #00ff00;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    transition: color 0.3s;
  }
  
  .navbar-links a:hover {
    color: #00cc00;
  }
  </style>