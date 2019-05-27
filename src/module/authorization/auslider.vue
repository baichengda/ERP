<template lang="html">
  <Slider :class="$style.slider">
    <ul>
      <li>
        <router-link :to="{ name: 'ordercontent'}" active-class="active">
          <i></i>
          <span>Store & Order</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'shipcontent'}">
          <i></i>
          <span>Ship From Address</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'pringting'}">
          <i></i>
          <span>Label Size & Pringting</span>
        </router-link>
      </li>
    </ul>
  </Slider>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
  components: {
    Slider,
  }
}
</script>
<style scoped>
.active {
  background-color: #f0f2ff;
  color: #2400a8;
  border-left: 2px solid #2400a8;
}
li:nth-child(1) .active i{
  background-position: -44px -10px;
}
li:nth-child(2) .active i{
  background-position: -112px -10px;
}
li:nth-child(3) .active i{
  background-position: -180px -10px;
}
</style>
<style lang="scss" module>
@import '@/common/css/layout.scss';
.slider{
  ul{
    li{
      height: 42px;
      line-height: 42px;
      cursor: pointer;
      a{
        @include flex(row);
        align-items: center;
        padding-left: 23px;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: $color1;
        box-sizing: border-box;
        i{
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url('https://img.postpony.com/v3/ERP/slidericon.png');
        }
        span{
          font-size: $font12;
          font-family: Regular;
          margin-left: 8px;
          width: 132px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &:hover{
          background-color: $color4;
        }
      }
      &:nth-child(1){
        a{
          i{
            background-position: -10px -10px;
            // background-position: -44px -10px;
          }
        }
      }
      &:nth-child(2){
        a{
          i{
            background-position: -78px -10px;
            // background-position: -112px -10px;
          }
        }
      }
      &:nth-child(3){
        a{
          i{
            background-position: -146px -10px;
            // background-position: -180px -10px;
          }
        }
      }
    }
  }
}
</style>
