<template lang="html">
  <section>
     <section :class="$style.theader">
       <div>
          <i></i>
          <span>User Center</span>
       </div>
       <ul>
         <li>
            <span>Ready to Print</span>
            <span>(19)</span>
         </li>
         <li>
            <span>Settings</span>
            <i></i>
         </li>
         <li>
            <span>UserName</span>
            <i></i>
            <div :class="$style.model">
               <h4>UserName</h4>
               <section :class="$style.banlance">
                  <div>
                     <span>Balance: </span>
                     <span>$99999.99</span>
                  </div>
                  <div>
                     <router-link :to="{ name: ''}">
                        <span>Recharge</span>
                     </router-link>
                  </div>
               </section>
               <section :class="$style.banlance">
                  <div>
                     <span>Credit Card: </span>
                     <span></span>
                  </div>
                  <div>
                     <router-link :to="{ name: ''}">
                        <span>My Wallet</span>
                     </router-link>
                  </div>
               </section>

               <section :class="[$style.card,'credit-card']">
                  <GeminiScrollbar class="my-scroll-bar" autoCreate :forceGemini="true" autoshow>
                        <div>
                           <span>Visa</span>
                           <div>
                              <span :class="$style.number">413521******8650</span>
                              <span>Untied</span>
                           </div>
                        </div>
                        <div>
                           <span>Visa</span>
                           <div>
                              <span :class="$style.number">413521******8650</span>
                              <span>Untied</span>
                           </div>
                        </div>
                        <div>
                           <span>Visa</span>
                           <div>
                              <span :class="$style.number">413521******86508</span>
                              <span>Untied</span>
                           </div>
                        </div>
                     </GeminiScrollbar>
               </section>

               <section>
                  <router-link :to="{ name: ''}">
                     <span>Logout</span>
                  </router-link>
               </section>
            </div>
         </li>
       </ul>
     </section>
      <section :class="$style.mheader">
         <img src="@/assets/logo.svg" alt="">
         <ul>
            <li>
               <span>ORDER</span>
            </li>
            <li>
               <span>SHIPMENTS  (19)</span>
               <ul>
                  <li>Ready to Ship</li>
                  <li>Ready for Payment</li>
                  <li>Ready to Print</li>
                  <li>Shipment History</li>
               </ul>
            </li>
            <li>
               <span>PRODUCT</span>
            </li>
         </ul>
      </section>
      <section :class="$style.bheader">

      </section>
  </section>
</template>

<script>
export default {
  name: 'pheader',
  components:{

 }
}
</script>
<style media="screen">
   .credit-card .my-scroll-bar{
       height:60px;
       width: 100%;
   }
   .credit-card .my-scroll-bar .gm-scroll-view>div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10px;
      margin-bottom: 15px;
   }
   .credit-card .my-scroll-bar .gm-scroll-view
   >div span:first-child{
      margin-right: 8px;
   }
</style>
<style lang="scss" module>
@import '@/common/css/layout.scss';

.theader {
  @include flex(row);
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  font-family: Regular;
  color: $color1;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px 0 24px;
  i{
    background: url('https://img.postpony.com/v3/ERP/headericon.png');
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  >div{
     span{
        font-size: $font14;
        margin-left: 6px;
     }
     i{
       width: 12px;
       height: 14px;
       background-position: -40px -10px;
     }
  }
  ul{
    position: relative;
     li{
        font-size: $font12;
        float: left;
        margin-left: 30px;
        >span{
           cursor: pointer;
           display: inline-block;
        }
        >span:last-child{
          color: $color2;
          font-family: Bold;
       }
       >span:first-child{
         margin-right: 6px;
      }
      &:nth-child(3){
        >span{
          min-width: 66px;
        }
        i{
          width: 10px;
          height: 6px;
          background-position: -10px -10px;
        }
        &:hover{
          .model{
            visibility: visible;
          }
        }
      }
      &:nth-child(2){
         margin-left: 32px;
         span{
           min-width: 52px;
         }
         i{
           width: 14px;
           height: 14px;
           background-position: -72px -10px;
         }
      }
      &:hover{
         >span{
            font-family: Bold;
            color: $color2;
         }
      }
      .model{
         position: absolute;
         top: 44px;
         right: 0;
         width: 274px;
         height: 246px;
         z-index: 9;
         border-radius: 4px;
         background-color: #fff;
         box-shadow: 0px 4px 16px rgba(36,0,168,.08);
         box-sizing: border-box;
         padding: 25px 22px 34px;
         // display: none;
         visibility: hidden;
         section{
            &:nth-child(3){
               margin-bottom: 22px;
            }
            &:last-child{
               text-align: right;
               span{
                  color:$color3;
                  font-family: Regular;
                  text-decoration: underline;
               }
            }
         }
         &:before , &:after{
            content: '';
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #fff;
            position: absolute;
            left: 88%;
            top: -20px;
         }
         &:before{
            border-bottom-color: #ccc;
         }
         h4{
            color: $color2;
            font-size: $font16;
            font-family: Bold;
            height: 12px;
            line-height: 14px;
            margin-bottom: 28px;
         }
         .banlance{
            @include flex(row);
            justify-content: space-between;
            align-items: center;
            font-size: $font14;
            font-family: Regular;
            height: 12px;
            line-height: 14px;
            margin-bottom: 12px;
            div{
               &:first-child{
                  color: $color2;
               }
               &:last-child{
                  span{
                     color: $color3;
                     text-decoration: underline;
                  }
               }

            }
         }
         .card{

         }
      }
     }
  }
}

.mheader {
   @include flex(row);
   align-items: center;
   width: 100%;
   height: 60px;
   line-height: 60px;
   background-color: $color2;
   box-sizing: border-box;
   padding-left: 20px;
   img{
      width: 102px;
      height: 29px;
   }
   >ul{
      padding-left: 104px;
      &>li{
         font-family: Light;
         color: #fff;
         float: left;
         font-size: $font14;
         cursor: pointer;
         position: relative;
         >span{
            opacity: 0.6;
            height: 56px;
            display: inline-block;
            &:hover{
               opacity: 1;
               border-bottom: 2px solid #fff;
               height: 56px;
            }
         }
         &:nth-child(1){
            margin-right: 27px;
         }
         &:nth-child(2){
            margin-right: 34px;
         }
         &:nth-child(2):hover{
           ul{
             display: block;
           }
         }
         ul{
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 9;
            background-color: #fff;
            box-shadow: 0px 4px 16px 0px
            rgba(22, 0, 103, 0.08);
            border-radius: 4px;
            width: 164px;
            box-sizing: border-box;
            padding: 25px 0 15px 22px;
            display: none;
            li{
               color: $color1;
               font-family: Regular;
               font-size: $font12;
               height: 12px;
               line-height: 12px;
               margin-bottom: 14px;
            }
         }
      }
   }
}
</style>
