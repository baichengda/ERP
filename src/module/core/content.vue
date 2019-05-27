<template lang="html">
  <section :class="[content,mcontent]">
    <slot/>
  </section>
</template>

<script>
export default {
  props:{
    content:{
      type: String,
      default:''
    }
  },
  data() {
    return {
      mcontent: "mcontent"
    }
  }
}
</script>
<style>
  .mcontent {
    margin-left: 226px;
    padding-top: 30px;
    box-sizing: border-box;
    max-width: 954px;
  }
</style>
<style lang="scss" module>
@import '@/common/css/layout.scss';

</style>
