风机监测系统可视化展示
===
风机监测系统前端开源版，包括风机发电量占比、风机负载、影响健康指标分布图、监测设备状态、温度/湿度监测、旋转地球特效。

搭建平台
--
由Vuecli3搭建，后台数据由mock.js随机生成

技术栈
--
VUE2+Echarts+axios+Mock.js+ElementUI

# 技术栈包括VUE2+Echarts+axios+Mock.js+ElementUI。

## 项目内容包括：

1.风机发电量占比（圆环图）

2.风机负载（圆环图）

3.影响健康指标分布图（南丁格尔玫瑰图）

4.监测设备状态（柱状图）

5.温度/湿度监测（柱状图）

6.旋转地球特效

## 本项目请在PC端运行
[案例在线展示](http://139.9.131.107:90/ "悬停显示")

![](https://github.com/dxtbrave/MonitoringSystem/blob/main/src/assets/img/QRCode.png)

# 说明
由于个人能力有限，所以应用的代码在有些地方设计可能存在不合理，代码也显得臃肿，同时用户体验、应用流畅性、代码健壮性和可扩展性还有待改进。欢迎大家指正。

### 项目运行
```
git clone https://github.com/dxtbrave/MonitoringSystem
cd MonitoringSystem
npm install
npm run serve
```

### 项目打包
```
npm run build
```
