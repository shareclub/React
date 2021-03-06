# 基于Python和Echarts的招聘数据可视化系统

## 一、研究背景
在互联网的支持下，又新增了许多的工作招聘渠道。企业和求职者都能在招聘平台上快速地找到与自己感兴趣的职业信息，然后根据这些信息招人或求职。这样的平台有很多，例如智联招聘，拉钩网，boss直聘，51job等。在大量的招聘数据中，招聘者往往难以分析出一些宏观信息，导致在职位选择上可能会出现错误，而影响了日后在职业上的发展。而将数据可视化后，不仅能够大大缩少求职者们花费在招聘平台的时间，而且增加了他们的职位选择的准确性和合理性。

## 二、需求分析
1. 职位分布：
在UI界面上以侧边导航的形式，向用户提供职位选择功能，根据自己的需求点击相关职位，在右侧内容框会显示相关职业的地图分布，根据各个城市地区招聘量在地图上显示了不同大小的散点，招聘量越大，散点也会越大，可通过鼠标对地图放大缩小等控制。将鼠标放置在散点上可查看详情，会有招聘城市名、招聘量等提示信息。
2. 相关企业：
点击相关企业，会有个下拉菜单，提供相应的职位选项。用户选择想要查找的选项，点击导航，跳转到相关页面，右侧显示相关职位信息，包括职称、公司、地址、薪资、发布日期等信息。

    ![系统用例图](https://s2.ax1x.com/2020/02/17/3ChtaQ.png)

## 三、性能需求
1. 性能：
初始启动时间在1~5分钟(由于没有部署到网络上，只能在vscode上启动项目，页面响应时间0.1s-0.5s
2. 可修改性：
如需增加、修改、删除功能，可在后期增加功能组件，再使用入口文件index.js渲染或使用路由进行跳转
3. 易用性：
用户只需要点击左侧导航就能跳转到响应页面，在响应页面中也会用一些操作控件，整个操作过程都浅显易懂，不需要有用户提示，也能使用所有功能。

## 四、安装开发环境
1. 安装python3.7：
Python是一种跨平台的计算机程序设计语言。是一种面向对象的动态类型语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、大型项目的开发。该环境用于运行python爬虫程序。
2. 安装visual studio code：
Visual studio code 是微软于2015年发布的一款免费，开源，轻量，跨平台的现代化轻量级代码编辑器。该编辑器用于编写所有项目代码。
3. 安装Node.js
Node.js 就是运行在服务端的 JavaScript，是一个基于Chrome JavaScript 运行时建立的一个平台，是事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。
4. 安装npm或cnpm
Npm全称为Node Package Manager，是一个基于Node.js的包管理器，也是整个Node.js社区最流行、支持的第三方模块最多的包管理器。npm的初衷：JavaScript开发人员更容易分享和重用代码。npm的使用场景：允许用户获取第三方包并使用。允许用户将自己编写的包或命令行程序进行发布分享。
cnpm是淘宝团队做的国内镜像，因为npm的服务器位于国外可能会影响安装。淘宝镜像与官方同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
5. 安装react
使用npm或cnpm安装脚手架creat-react-app，然后再通过脚手架快速创建react工程。
6. 安装echart
使用npm或cnpm安装echart，然后通过import引入echart模块到项目中

## 五、设计方案
1. 数据获取模块 
- 爬虫模块
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3C4eyV.md.png)
- 数据格式转换模块
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3C4Ezq.png)
2. 数据展示模块
- 展示模块
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3C4kJs.png)
3. 模块结合
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3C4ZQ0.png)


## 六、系统实现

1. 系统主界面:
显示系统欢迎页，提供侧边导航栏。
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3ChrrT.md.png)

2. 职位分布:
点击职位分布，会有5个二级菜单提供渲染，目前提供查询的有web、Java、PHP、Python、Hadoop，点击需要查询的职位，则会在右侧地图中显示相对应的职位数量的分布情况。
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3Ch6ZF.md.png)

3. 为了强调招聘量排名靠前的城市，在地图上会显示区别于其他城市的特效，让用户直观清晰地了解到该职位在哪些城市更加受欢迎，需求更大。
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3Chca4.md.png)
4. 使用鼠标滚轮可控制地图的放大缩小功能，将鼠标放置在地图上紫色的散点，会显示招聘量信息。
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3ChgIJ.png)
5. 相关企业:
主要是将招聘职位的相关企业使用列表的形式显示出来，这样可以快速查看有哪些招聘该职位员工的企业。目前同样是提供查询的同样有五个职位web、Java、PHP、Python、Hadoop。点击相关企业，会打开二级菜单，点击需要查询企业，在右侧就会显示相对应的企业信息，包括招聘职位，公司，地址，薪资，日期。
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3ChRi9.md.png)
6. 在页面的右下方提供分页功能，可选择上一页，下一页，或指定页码
> ![系统用例图](https://s2.ax1x.com/2020/02/17/3ChWGR.png)

## 总结与体会
从项目准备阶段，项目开发阶段（系统的需求设计、开发编码、系统测试、系统优化），项目文档撰写，该项目耗时大约一个月。从中收益良多：
1. 开发能力:
了解了一个项目从无到有的过程需要经过哪些阶段，深刻体会到了项目开发的前期准备对于后期开发维护的重要性，前期设计得好，可以大大减少后期开发的麻烦。
技术上
2. 技术能力:
这个项目整体而言，虽然说不是很复杂，但它涉及的技术有很多，比如python(urllib\bs4\Re)、React(antd\webpack\babel)、Echarts(百度地图\Echarts配置)等。在做完整个项目后，对于这些技术有了不同程度的学习和理解，感觉十分好
开发管理
3. 项目管理能力:
在项目开发的过程中，必须要做到的是版本管理，这样在开发的时候就能清楚自己的开发进度，同时也能避免没有备份而白费了之前的开发，在本项目我使用github对项目管理，有效地避免了这些问题。
总体而言，该项目不仅是对我的开发能力、技术、项目的管理能力都有很大的提升，另外对于在开发过程中遇到困难时的解决能力也提升了不少。