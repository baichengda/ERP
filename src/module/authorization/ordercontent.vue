<template lang="html">
  <Content :class="$style.content">
    <section :class="$style.integration">
      <div>
        <h4>Integration</h4>
        <p>Add, edit, and delete online stores and marketplaces.</p>
      </div>
      <div>
        <span>Add New</span>
        <i></i>
      </div>
    </section>
    <section :class="$style.detail">
      <img src="https://img.postpony.com/v3/ERP/ebay.png" alt="">
      <div>
        <dl>
          <dt>Store the alias</dt>
          <dd>The sender name</dd>
          <dd>Mailing address 1</dd>
          <dd>Mailing address 2(not shown when not available)</dd>
          <dd>City, state code</dd>
        </dl>
        <dl>
          <dt>Last Store Sync:</dt>
          <dd>01/01 00:00AM</dd>
        </dl>
        <ul>
          <li>
            <i></i>
            <span>Connected</span>
          </li>
          <li>
            <i></i>
            <span>Not Connected</span>
          </li>
        </ul>
        <div>
          <router-link :to="{ name: ''}">
            <i></i>
            <span>Edit Store</span>
          </router-link>
        </div>
      </div>
      <i></i>
    </section>
  </Content>
</template>

<script>
import Content from "../core/content.vue"
export default {
  name: "ordercontent",
  components: {
    Content,
  }
}
</script>

<style lang="scss" module>
@import '@/common/css/layout.scss';
.content{
  i{
    background: url('https://img.postpony.com/v3/ERP/acontenticon.png');
    display: inline-block;
    vertical-align: middle;
  }
  .integration{
    @include flex(row);
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    div{
      color: $color1;
      h4{
        font-family: Bold;
        font-size: $font16;
        margin-bottom: 6px;
      }
      p{
        font-family: Regular;
        font-size: $font12;
      }
      i{
        width: 23px;
        height: 23px;
        background-position: -142px -10px;
      }
      &:nth-child(2){
        span{
          font-family: Light;
          font-size: $font14;
          margin-right: 9px;
        }
      }
    }
  }

  .detail{
    width: 952px;
    height: 298px;
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px #f0f2ff;
    margin-bottom: 20px;
    @include flex(row);
    justify-content: space-between;
    align-items: center;
    position: relative;
    >i{
      width: 12px;
      height: 12px;
      background-position: -10px -10px;
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }
    >img{
      width: 324px;
      height: 218px;
      margin-left: 60px;
    }
    >div{
      width: 50%;
      dl{
        color: $color1;
        line-height: 18px;
        &:nth-child(1){
          margin-bottom: 26px;
          dt{
            margin-bottom: 18px;
          }
        }
        &:nth-child(2){
          margin-bottom: 27px;
          dt{
            margin-bottom: 8px;
          }
        }
        dt{
          font-family: SemiBold;
          font-size: $font16;
          height: 13px;
          line-height: 13px;
        }
        dd{
          font-family: Regular;
          font-size: $font12;
          padding-left: 20px;
          height: 12px;
          line-height: 12px;
          margin-bottom: 6px;
        }
      }
      ul{
        margin-bottom: 21px;
        height: 12px;
        line-height: 12px;
        li{
          float: left;
          span{
            margin-left:8px;
            margin-right: 27px;
            font-family: Light;
            font-size: $font14;
            color: $color5;
            height: 11px;
            line-height: 11px;
          }
          i{
            width: 14px;
            height: 15px;
          }
          &:nth-child(1){
            i{
              background-position: -74px -10px;
            }
          }
          &:nth-child(2){
            i{
              background-position: -108px -10px;
            }
          }
        }
      }
      div{
        height: 12px;
        line-height: 12px;
        a{
          color: $color6;
          height: 100%;
          line-height: 12px;
          font-family: Regular;
          font-size: $font12;
          span{
            margin-left: 9px;
          }
          i{
            width: 12px;
            height: 12px;
            background-position: -42px -10px;
          }
        }
      }
    }
  }
}
</style>
