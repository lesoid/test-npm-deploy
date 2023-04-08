<!-- Vue3 emits and props -->

<template>
    
   <LayoutsPortfolioHeader class="header_layout"></LayoutsPortfolioHeader>
   <p>ppp= {{pp }}</p>
   <NuxtLink to="/"><button class="i0" @click.prevent="$emit('ee', 'home')">-home-</button></NuxtLink> 
   <NuxtLink to="/"> <button class="i1" @click.prevent="$emit('ee', 'kub1')">-1-</button></NuxtLink>
   <NuxtLink to="/"><button class="i2" @click.prevent="$emit('ee', 'kub2')">-2-</button></NuxtLink> 
   <NuxtLink to="/"><button class="i2" @click.prevent="$emit('ee', 'kub3')">-2-</button></NuxtLink> 
</template> 

<script lang="ts">
 export default {
    props: ['pp'],
    emits: ['ee']
  }
</script>