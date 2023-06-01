Simple Config GeoIP for Quantumult X (QuantumultX) / Clash 预配置文件包含 Apple News解锁规则、去广告分流规则、TikTok 解锁 Rewrite、神机分流规则和 VIP 视频解析重写, 并提供相应的快捷方式

## 简介
> + 利用 Quantumult X 和 GeoIP 特性整合多个重写配置, 剔除大部分规则以节省开销, 通过 Vercel 重定向精简规则和配置文件
- [使用方法](https://github.com/smxl/500#使用方法)
- [分流规则和重写](https://github.com/smxl/500#分流规则和重写)
- [小工具](https://github.com/smxl/500#小工具)
- [Clash](https://github.com/smxl/500#clash-配置文件)
- [配置文件更新](https://github.com/smxl/500#配置文件更新)
- [推荐](https://github.com/smxl/500#推荐)

## 声明

Disclaimer: 部分脚本和内容由 ChatGPT 编写

本项目在多个 [Quantumult X](https://apps.apple.com/us/app/quantumult-x/id1443988620) 配置文件上进行了优化

所有内容仅供参考, 不对本项目上的任何第三方内容负责, 这些链接和内容仅供参考和方便使用, 不代表本项目对这些内容的赞同或认可

Github 地址: [https://github.com/smxl/500](https://github.com/smxl/500)

##  使用方法

1. 下载或复制配置文件

[https://github.com/smxl/500/raw/main/500.conf](https://github.com/smxl/500/raw/main/500.conf)

[https://cnn.vercel.app/500.conf](https://cnn.vercel.app/500.conf)

2. Quantumult X - 风车 - 配置文件 -下载 - 粘贴 - 确定

3. Mitm - 生成证书 - 配置证书 - 安装证书

4. 系统 - 设置 - 通用 - 关于 - 信任证书

5. Quantumult X - 风车 - 节点 - 引用 (订阅) - 右上角添加 - 填写标签和资源路径 (自己的机场订阅链接)

6. Quantumult X - 风车 - 其他设置 - GeoLite2 来源 添加 GeoIP

7. GeoIP2-CN 选一 (复制链接或下载导入)
> - [Loyalsoldier](https://github.com/Loyalsoldier/geoip/raw/release/Country-only-cn-private.mmdb)
> - [Hackl0us](https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb)
> - [soffchen](https://github.com/soffchen/GeoIP2-CN/raw/release/Country.mmdb)

8. 如你没有自己的订阅链接, 可直接使用, 若需要使用自己的订阅, 可把配置文件中 [server_remote] 下方 https://cnn.vercel.app/xv-sub 改为你的订阅链接

9. 启动, 由于 Quantumult X 不支持 url schema / url-schema 启动, 建议打开 其他设置 - VPN - 始终开启, 剩余开关按需选择

注1: 本配置文件默认的订阅链接为网上公开的信息, 对隐私需求较高的用户不建议长期使用 ~~另本配置使用了公开的 MITM 证书, 建议自行生成替换 (生成证书后, 导出时不输入密码即可跳过 passphrase)~~

注2: 由于 QX 并未提供对 NaïveProxy (naiveproxy) 的支持, 当下版本推荐在局域网内的 OpenWRT 上运行, 通过本地服务 ```socks5=192.168.124.124:1080, tag=LAN``` 链接, 路由端添加启动脚本 ```naive /[PATH]/config.json```

## 分流规则和重写

tag 名|类型|短链|介绍 - 删除线表示停用
-|-|-|-
ads|规则|https://cnn.vercel.app/xf-ads|去广告阻止
cn|规则|https://cnn.vercel.app/xf-cn|大陆服务直联
global|规则|https://cnn.vercel.app/xf-global|国际服务
hijacking|规则|https://cnn.vercel.app/xf-hijacking|防劫持
privacy|规则|https://cnn.vercel.app/xf-privacy|隐私
tg|规则|https://cnn.vercel.app/xf-tg|Telegram
unbreak|规则|https://cnn.vercel.app/xf-unbreak|规则修正
-|-|-|-
adlite|重写|https://cnn.vercel.app/xr-adlite|复写去广告
ads|重写|https://cnn.vercel.app/xr-ads|重写去广告
adscript|重写|https://cnn.vercel.app/xr-adscript|脚本去广告
apple|重写|https://cnn.vercel.app/xr-apple|解锁受限的 Apple 服务, 去掉天气兼容 iOS16 请用 Scriptable/IQair/在意空气 小组件显示美标 AQI
bing|重写|https://cnn.vercel.app/xr-bing|New Bing w/ Safari w\ Edge
bili|重写|https://cnn.vercel.app/xr-bili|Bilibili 界面优化
box|重写|https://cnn.vercel.app/xr-box|BoxJS
-|2023.01||如有需要, 手动添加
covsc|重写|https://cnn.vercel.app/xr-covsc|24h 内核酸检测报告 四川天府健康通 精简 - 仅支付宝 默认关闭
covidsc|重写|https://cnn.vercel.app/xr-covidsc|24h 内核酸检测报告 四川天府健康通 全功能 - 支付宝+微信 默认关闭
covidsc|重写|https://cnn.vercel.app/xr-covidhn|24h 内核酸检测报告 河南豫康码 默认关闭
emby|重写|https://cnn.vercel.app/xr-emby|Emby 解锁, 无通知
fake|重写|https://cnn.vercel.app/xr-fake|Fake Pro 解锁, lk 的基础上进行了精简, 并增加了 Spotify Pro
jike|重写|https://cnn.vercel.app/xr-jike|即刻去直播
jsc|重写|https://cnn.vercel.app/xr-jsc|脚本获取 Cookies
lk|重写|https://cnn.vercel.app/xr-lk|国外服务 Fake VIP
upgrade|重写|https://cnn.vercel.app/xr-upgrade|屏蔽应用更新检查
res|重写|https://cnn.vercel.app/xr-res|大陆软件优化
search|重写|https://cnn.vercel.app/xr-search|DuckDuckGo 搜索引擎重写
v|重写|https://cnn.vercel.app/xr-v|视频解析重写
video|重写|https://cnn.vercel.app/xr-video|视频重写 3in1, 含视频解析重写, TikTok US, YouTube 去广告

你可以根据自己的情况调整上述规则和重写是否需要启用, 举例: 如果你很少使用海外软件, 那么 ```lk 重写 https://cnn.vercel.app/xr-lk 国外服务 Fake VIP``` 其中提供的多款软件的 VIP/Pro 解锁则对你无用 [其中部分重写已经失效], 同理如此 ```fake https://cnn.vercel.app/xr-fake Fake Pro 解锁``` 是该规则的精简

## 小工具

工具|作用|链接/补充
-|-|-
V 视频|高可用解析|https://cnn.vercel.app/v?vv=视频地址 https://cnn.vercel.app/v.html?vv=视频地址 支持参数传入, 替换中文部分为网址即可使用
快速搜索|设置 Safari 默认搜索引擎为 DuckDuckGo|默认谷歌, 前缀两个字母指定其他搜索引擎 Baidu:bd/Magi:mm/Twitter:tt/YouTube:yt/WolframAlpha:wa + 空格 + 关键词
[YouTube 去广告油猴脚本](https://github.com/smxl/YouTube-Sponsor-Skip)|相较于 QX 重写更稳定|https://github.com/smxl/YouTube-Sponsor-Skip/raw/main/yt.sponsor.skip.user.js
[AQI 小组件]()|不影响系统天气|

请自行抓包, [iOS旧版应用下载v5.1](https://wwx.lanzoui.com/iBE4Emzgbkj) 或 [Fiddler](https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe) + 关键词 bpu MZBuy.woa Google

建议下载旧版本 [iTunes 12.6.5.3](https://support.apple.com/zh-cn/HT208079) 抓包

启用 fake 重写后, 这些软件有增强效果: Adguard, Day One, Draft, Documents, Lightroom, PS Express, Memrise, Spotify pro*... 标*表示不确定是否解锁内购或模拟 VIP

启用 res 重写后, 这些软件有增强: 哔哩哔哩, 彩云天气, 微信, 百度网盘...

~~Clash for Windows 去机场广告~~

## Clash 配置文件

使用了 providers 配置

下载: [cnn-clash.yaml](https://github.com/smxl/500/raw/main/cnn-clash.yaml) 需要使用 [Premium Core](https://github.com/Dreamacro/clash/releases/tag/premium)

如果需要使用自己的订阅, 你需要替换字段 https://api.10101.io/sub?target=clash&url=https://github.com/freefq/free/blob/master/v2?raw=true&list=true

你也可以修改注释中的 ```你的订阅链接```, 然后取消掉配置中全部注释

```
proxy-providers:
  # My: # 你也可以将 url 换成你的 clash 节点订阅链接
  #   type: http
  #   path: ./my.yaml
  #   url: https://api.10101.io/sub?target=clash&url=你的订阅链接&list=true
...
```

## 配置文件更新

500-cnn.conf

[https://github.com/smxl/500/raw/main/500.conf](https://github.com/smxl/500/raw/main/500.conf)

[https://cnn.vercel.app/q](https://cnn.vercel.app/q)

cnn-clash.yaml

[https://github.com/smxl/500/raw/main/cnn-clash.yaml](https://github.com/smxl/500/raw/main/cnn-clash.yaml)

[https://cnn.vercel.app/c](https://cnn.vercel.app/c)

## 推荐

本配置文件引用了一些项目或服务, 你可以在 vercel.json 找到他们

为方便访问原项目, 配置文件中的引用方式均使用了 https://github.com/用户/项目/raw/分支/目录/文件 格式

极简模板 https://cnn.vercel.app 去掉大部分无用配置, 仅保留基础框架

感谢 ilovexjp ILoveNucleicAcidTest etc.
