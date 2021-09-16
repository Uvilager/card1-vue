<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com/%22%3E">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>

  <div class="background">
    <Zoran />
  </div>
  
</template>

<script>

import Zoran from './components/Zoran.vue'

export default {
  name: 'App',
  components: {
    Zoran,
  }
}
</script>

 <style scoped>
    .background {
      background-image: url('/images/bg-pattern-top.svg'), url('/images/bg-pattern-bottom.svg');
      background-position: right 50vw bottom 50vh, left 50vw top 50vh;
      background-repeat: no-repeat;
      background-color: #19A2AE;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
 </style>