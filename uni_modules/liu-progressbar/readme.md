### liu-progressbar适用于uni-app项目的进度条组件
### 本组件目前兼容微信小程序、H5
### 本组件支持自定义，支持设置文字内显、当前进度、文字颜色、文字大小、进度条颜色、进度条底色、进度条高度、进度条圆角弧度
# --- 扫码预览、关注我们 ---

## 扫码关注公众号，查看更多插件信息，预览插件效果！ 

![](https://uni.ckapi.pro/uniapp/publicize.png)

### 使用方式
``` html
<view class="title">文字内显</view>
<liu-progressbar :progress="70" color="#FFFFFF" :height="'40rpx'" />
<view class="title">文字外显</view>
<liu-progressbar :textInside="false" :progress="70" color="#333333" :height="'40rpx'" />
<view class="title">自定义高度</view>
<liu-progressbar :progress="70" color="#FFFFFF" :height="'25rpx'" />
<view class="title">自定义圆角弧度</view>
<liu-progressbar :progress="70" color="#FFFFFF" :height="'40rpx'" :borderRadius="'40rpx'" />
<view class="title">自定义进度条颜色</view>
<liu-progressbar :progress="70" bgColor="red" color="#FFFFFF" :height="'40rpx'" />
<view class="title">自定义底色</view>
<liu-progressbar :progress="70" dsColor="red" color="#FFFFFF" :height="'40rpx'" />
```

### 属性说明
| 名称                         | 类型            | 默认值                  | 描述             |
| ----------------------------|---------------- | ---------------------- | ---------------|
| textInside                  | Boolean         | true                   | 文字是否内显
| progress                    | Number          | 50                     | 当前进度
| color                       | String          | #FFFFFF                | 文字颜色
| fontSize                    | String          | 24rpx                  | 文字大小
| bgColor                     | String          | #5cb85c                | 进度条颜色
| dsColor                     | String          | #f2f2f2                | 进度条底色颜色
| height                      | String          | 28rpx                  | 进度条高度
| borderRadius                | String          | 8rpx                   | 进度条圆角弧度








