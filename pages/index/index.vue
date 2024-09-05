<template>
	<view class="bg">
    <input type="text" value="        请输入商品名称">
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
        :duration="duration">
        <swiper-item>
          <view class="swiper-item">
            <image src="https://ts1.cn.mm.bing.net/th/id/R-C.c5a687f81576605e3d34d532e675aef6?rik=CANdCobpt2i1ig&riu=http%3a%2f%2fwww.ninecosmos.com%2fweb%2fuploads%2fimage%2f20210817%2f428y6OK39HA01i61LpMd0y32YZQr56Ql.jpg&ehk=H3ai8p4mzGj3yyxBIp%2b%2f8zNTtMHo4BKh%2bLZ07Y%2b75Rc%3d&risl=&pid=ImgRaw&r=0" mode=""></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="https://ts1.cn.mm.bing.net/th/id/R-C.58670e6ae96dd1153d1a3102bfde1c91?rik=vXLgNTt3fsOXMQ&riu=http%3a%2f%2fwww.nongxianfeng.com%2ffile%2fupload%2f201910%2f12%2f102759681.jpeg&ehk=qxJqPDzly0V5DOMDc9giX6pCRzMyaAvPChCMpJrvHjo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" mode=""></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <div class="news">
      <div class="content">
        <div class="tag">动态</div>
        <text>智慧种植物联网数字化管理解决方案</text>
      </div>
      <div class="content">
        <div class="tag tag2">新闻</div>
        <text>“认养农业”种出“向往的生活”</text>
      </div>
    </div>
    <div class="function">
      <div class="option">
        <div class="icon">
          <iconfont name="a-008_shalaqingshi" />
        </div>
        <text>种植</text>
      </div>
      <div class="option" @click="gotoAdopt()">
        <div class="icon">
          <iconfont name="jinzhu" />
        </div>
        <text>认养</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="dingweiweizhi" />
        </div>
        <text>农场图</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="jiankongchakan" />
        </div>
        <text>监控</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="huodong" />
        </div>
        <text>活动</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="fangkeyaoqing" />
        </div>
        <text>访客邀请</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="kabao" />
        </div>
        <text>卡包</text>
      </div>
      <div class="option">
        <div class="icon">
          <iconfont name="huiyuan" />
        </div>
        <text>会员</text>
      </div>
    </div>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
			}
		},
		onLoad() {
		},
		methods: {
      changeIndicatorDots(e) {
          this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay(e) {
          this.autoplay = !this.autoplay
      },
      intervalChange(e) {
          this.interval = e.target.value
      },
      durationChange(e) {
          this.duration = e.target.value
      },
      gotoAdopt(){
        uni.switchTab({
          url:'/pages/adop/adop'
        })
      }
		}
	}
</script>

<style  lang="scss">
	.bg{
    padding-top: 20rpx;
    background-color: #3ab54a;
    input{
      width: 95%;
      height: 80rpx;
      margin: 0 auto;
      color: white;
      background-color: rgba(255,255,255,0.2);
      border-radius: 10rpx;
    }
    	.uni-margin-wrap {
    		width: 700rpx;
    		width: 95%;
        margin: 0 auto;
        margin-top: 30rpx;
        margin-bottom: 20rpx;
    	}
    	.swiper {
    		height: 395rpx;
    	}
    	.swiper-item {
    		display: block;
    		height: 395rpx;
    		line-height: 300rpx;
    		text-align: center;
        image{
          width: 100%;
          height: 100%;
          border-radius: 20rpx;
        }
    	}
    	.swiper-list {
    		margin-top: 40rpx;
    		margin-bottom: 0;
    	}
    	.uni-common-mt {
    		margin-top: 60rpx;
    		position: relative;
    	}
    	.info {
    		position: absolute;
    		right: 20rpx;
    	}
    	.uni-padding-wrap {
    		width: 550rpx;
    		padding: 0 100rpx;
    	}
      .news{
        background-color: white;
        .content{
          display: flex;
          padding: 20rpx;
          .tag{
            width: 120rpx;
            height: 50rpx;
            color: white;
            text-align: center;
            line-height: 50rpx;
            font-size: 30rpx;
            background-color: #01c65b;
            border-radius: 10rpx;
            margin-right: 20rpx;
          }
          .tag2{
            background-color: #f8cc2d;
          }
          text{
            font-size: 30rpx;
            color: grey;
          }
        }
      }
      .function{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 50rpx;
        background-color: white;
        .option{
          width: 24%;
          text-align: center;
          margin-right: 1%;
          margin-top: 5%;
          // background-color: palegreen;
          .icon{
            width: 50%;
            margin: 0 auto;
            // background-color: paleturquoise;
            iconfont{
              width: 100%;
              margin: 0 auto;
            }
          }
          text{
            font-size: 25rpx;
          }
        }
      }
  }
</style>
