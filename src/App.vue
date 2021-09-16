<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com/%22%3E">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>

  <div class=" bg-dark-cyan flex justify-center items-center h-screen w-screen">
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