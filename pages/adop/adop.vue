<template>
  <view class="bg">
    <div class="title">认养农业</div>
    <p>自己认养，从田间直接到餐桌</p>
    <div class="content">
      <div class="searchBox">
        <input type="text" value="        输入认养名称搜索">
        <div class="search">搜索</div>
      </div>
      <v-tabs v-model="current" :tabs="tabs" @change="changeTab" activeColor="#00b429" lineColor="#00b429" fontSize='35rpx' bgColor	='#fafafa'></v-tabs>
      <div class="scan">
        <div class="article" @click="gotoDetails()">
          <div class="top">
            智慧农场
          </div>
          <div class="center">
            <div class="left">
              <image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.-YhfvBrqBZ_g8tgzx3eUzgHaE8?pid=ImgDet&rs=1" mode=""></image>
            </div>
            <div class="right">
              <div class="kind">农家黑猪</div>
              <div class="pro">
                <liu-progressbar :progress="72" color="#FFFFFF" :height="'40rpx'" />
              </div>
              <div class="cycle">
                <div class="variety">
                  <div class="name">土猪</div>
                  <div class="tip">品种</div>
                </div>
                <div class="variety">
                  <div class="name">365天</div>
                  <div class="tip">周期</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <text class="price">1980</text>
            <text class="unit">元/只</text>
          </div>
        </div>
        <div class="article">
          <div class="top">
            智慧农场
          </div>
          <div class="center">
            <div class="left">
              <image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.-YhfvBrqBZ_g8tgzx3eUzgHaE8?pid=ImgDet&rs=1" mode=""></image>
            </div>
            <div class="right">
              <div class="kind">农家黑猪</div>
              <div class="pro">
                <liu-progressbar :progress="72" color="#FFFFFF" :height="'40rpx'" />
              </div>
              <div class="cycle">
                <div class="variety">
                  <div class="name">土猪</div>
                  <div class="tip">品种</div>
                </div>
                <div class="variety">
                  <div class="name">365天</div>
                  <div class="tip">周期</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <text class="price">1980</text>
            <text class="unit">元/只</text>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        tabs: ['全部', '蔬菜', '畜牧', '家禽', '水稻', '果树']
      };
    },
    methods:{
      changeTab(index) {
        console.log('当前选中的项：' + index)
      },
      gotoDetails(){
        uni.navigateTo({
          url:'/pages/adop/details/details'
        });
      },
    }
  }
</script>

<style lang="scss">
.bg{
  padding-top: 60rpx;
  background-color: yellow;
  background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.c583a87b012de415fb112005898146d4?rik=XZ%2b%2bZwXaa3YAjA&riu=http%3a%2f%2fwww.sanxiangham.com%2fzb_users%2fupload%2f2018%2f03%2f201803181521377849558857.jpg&ehk=Q2l2F%2bVKDyAfKtxzOpnrW6v%2bfrHJLPYKcI%2bstzcWsII%3d&risl=&pid=ImgRaw&r=0');
  background-size: 100% 600rpx;
  .title{
    text-align: center;
    color: white;
    font-size: 40rpx;
    font-weight: 800;
    margin-bottom: 20rpx;
  }
  p{
    text-align: center;
    color: white;
    font-size: 35rpx;
    margin-bottom: 200rpx;
  }
  .content{
    padding-top: 30rpx;
    padding-left: 40rpx;
    padding-bottom: 70rpx;
    background-color: #fafafa;
    border-radius: 25rpx 25rpx 0 0;
    .searchBox{
      display: flex;
      input{
        width: 65%;
        height: 80rpx;
        color: grey;
        background-color: #f2f2f2;
        border-radius: 25rpx;
        margin-right: 20rpx;
        margin-bottom: 40rpx;
      }
      .search{
        width: 25%;
        height: 80rpx;
        color: white;
        text-align: center;
        line-height: 80rpx;
        border-radius: 50rpx;
        background-color: #00b429;
      }
    }
  }
  .scan{
    padding-top: 60rpx;
    padding-right: 40rpx;
    .article{
      height: 500rpx;
      padding-left: 40rpx;
      padding-right: 40rpx;
      margin-bottom: 25rpx;
      background-color: white;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      .top{
        height: 20%;
        line-height: 100rpx;
        font-weight: 800;
        border-bottom: 1rpx solid #f2f2f2;
      }
      .center{
        display: flex;
        height: 50%;
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        .left{
          width: 40%;
          height: 100%;
          background-color: palegoldenrod;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .right{
          width: 60%;
          padding-left: 20rpx;
          // background-color: palegreen;
          .kind{
            height: 20%;
            font-size: 40rpx;
            font-weight: 800;
          }
          .pro{
            height: 30%;
            padding-top: 30rpx;
            // background-color: paleturquoise;
          }
          .cycle{
            display: flex;
            height: 30%;
            .variety{
              width: 50%;
              text-align: center;
              .name{
                font-size: 35rpx;
                font-weight: 800;
                margin-bottom: 10rpx;
              }
              .tip{
                font-size: 28rpx;
                color: grey;
              }
            }
          }
        }
      }
      .bottom{
        height: 20%;
        padding-top: 20rpx;
        border-top: 1rpx solid #f2f2f2;
        .price{
          color: #ff0030;
          font-size: 45rpx;
          font-weight: 800;
          padding-right: 10rpx;
        }
        .unit{
          color: grey;
        }
      }
    }
  }
}
</style>
