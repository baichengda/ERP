<template lang="html">
  <section :class="[sliderClass,sname]">
     <slot/>
  </section>
</template>

<script>
export default {
   props:{
      sname: {
         type: String,
         default: "",
      }
   },
   data() {
      return {
         sliderClass:"slider-class"
      }
   }
}
</script>

<style lang="scss">
@import '@/common/css/layout.scss';
.slider-class {
    background-color: #ffffff;
    box-shadow: 0px 4px 16px 0px rgba(22, 0, 103, 0.08);
    width: 204px;
    box-sizing: border-box;
    padding-top: 20px;
    height: 85.9%;
    position: absolute;
}
</style>
