<template lang="html">
   <section>
      <Header/>
      <Auslider/>
      <router-view></router-view>
   </section>
</template>

<script>
import Header from "../core/header.vue"
import Auslider from "./auslider.vue"

export default {
   name: "authorization",
   components: {
      Header,
      Auslider,
   }
}
</script>

<style lang="scss">
</style>
