---
title: echarts疑难杂症
date: 2023-12-08 16:52:33
permalink: /pages/55cdaa/
categories: 
  - echarts
tags:
  - vue echarts
---
@[TOC](echarts疑难杂症)

#### echarts疑难杂症

#### 1.调整柱状图、饼图的大小

```js
//柱状图主要根据grid属性中的top/bottom/left/right属性调整大小
let option = {
    grid: {
          left: 25,
          right: 25,
          bottom:25,
          top:25,
          containLabel: true, // 保证label不会被挤掉
        },
}

//饼图调整主要根据radius调整饼图的大小(官方描述：数组的第一项是内半径，第二项是外半径),
//调整位置依旧可以按照上下左右以及center属性
//radius[0](案例中的40%，数值越大则越细，反之越粗),
//radius[1](案例中的70%，数值越大则图越大，反之越小)
let option = {
    series: [
              {
                type: "pie",
                left: 25,
                right: 25,
                bottom:25,
                top:25, 
                radius: ["40%", "70%"],
                center: ["50%", "50%"],
                avoidLabelOverlap: false,
              }
			]
		}
```

![image-20221118102936486](https://img-blog.csdnimg.cn/b6944f029967494984c4bb3167a55e1e.png)

#### 2.嵌套饼图且颜色保持一致

![image-20221118104010341](https://img-blog.csdnimg.cn/acc4e56f9113486ea7f34782f04109c8.png)

可以参考该博主 

[链接]: https://blog.csdn.net/Dalin0929/article/details/109646144

#### 3.并排展示饼图且中间展示文字

```js
//并排展示饼图需要注意center属性，具体摆放位置可以自己调

//展示文字主要取决于formatter属性，如果里面文字过多或者多行文字，
//可以通过"{aaa|我叫aaa}"+"\n"+"{bbb|我叫bbb}",则下面可以通过rich属性去给前面设置的aaa或bbb设置单独样式
let option = {
        series: [
          {
            type: "pie",
            center: ["12.5%", "50%"],
            radius: ["75%", "90%"],
            data: [
              {
                value: 28,
                name: "Quoted",
                label: {
                  position: "center",
                  formatter: "{proportion|13/15}" + "\n" + "{title|Quoted}",
                  rich: {
                    proportion: {
                      fontSize: 12,
                      fontFamily: "微软雅黑",
                      fontWeight: 700,
                      color: "#000",
                      lineHeight: 20,
                    },
                    title: {
                      fontSize: 10,
                      fontFamily: "微软雅黑",
                      color: "#7e7e7e",
                    },
                  },
                },
                itemStyle: {
                  color: "#00af50",
                },
              },
              {
                value: 13,
                name: "",
                label: {
                  show: false,
                },
                itemStyle: {
                  color: "#a6a6a7",
                },
              },
            ],
          },
          {
            type: "pie",
            center: ["37.5%", "50%"],
            radius: ["75%", "90%"],
            data: [
              {
                value: 26,
                name: "Shortlist",
                label: {
                  position: "center",
                  formatter: "{proportion|11/15}" + "\n" + "{title|Shortlist}",
                  rich: {
                    proportion: {
                      fontSize: 12,
                      fontFamily: "微软雅黑",
                      fontWeight: 700,
                      color: "#000",
                      lineHeight: 20,
                    },
                    title: {
                      fontSize: 10,
                      fontFamily: "微软雅黑",
                      color: "#7e7e7e",
                    },
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 12,
                  },
                },
                itemStyle: {
                  color: "#c00000",
                },
              },
              {
                value: 15,
                name: "",
                label: {
                  show: false,
                },
                itemStyle: {
                  color: "#a6a6a7",
                },
              },
            ],
          },
          {
            type: "pie",
            center: ["62.5%", "50%"],
            radius: ["75%", "90%"],
            data: [
              {
                value: 26,
                name: "Sampling",
                label: {
                  position: "center",
                  formatter: "{proportion|11/15}" + "\n" + "{title|Sampling}",
                  rich: {
                    proportion: {
                      fontSize: 12,
                      fontFamily: "微软雅黑",
                      fontWeight: 700,
                      color: "#000",
                      lineHeight: 20,
                    },
                    title: {
                      fontSize: 10,
                      fontFamily: "微软雅黑",
                      color: "#7e7e7e",
                    },
                  },
                },
                itemStyle: {
                  color: "#bc9200",
                },
              },
              {
                value: 11,
                name: "",
                label: {
                  show: false,
                },
                itemStyle: {
                  color: "#a6a6a7",
                },
              },
            ],
          },
          {
            type: "pie",
            center: ["87.5%", "50%"],
            radius: ["75%", "90%"],
            data: [
              {
                value: 2,
                name: "Ordered",
                label: {
                  position: "center",
                  formatter: "{proportion|2/15}" + "\n" + "{title|Ordered}",
                  rich: {
                    proportion: {
                      fontSize: 12,
                      fontFamily: "微软雅黑",
                      fontWeight: 700,
                      color: "#000",
                      lineHeight: 20,
                    },
                    title: {
                      fontSize: 10,
                      fontFamily: "微软雅黑",
                      color: "#7e7e7e",
                    },
                  },
                  //   textStyle: {
                  //     color: "#000",
                  //     fontSize: 12,
                  //   },
                },
                itemStyle: {
                  color: "#92d14f",
                },
              },
              {
                value: 17,
                name: "",
                label: {
                  show: false,
                },
                itemStyle: {
                  color: "#a6a6a7",
                },
              },
            ],
          },
        ],
      };
```

![image-20221118103124599](https://img-blog.csdnimg.cn/22fe7d4e86684d7ba72ce6a9ef71abf4.png)

#### 4.折线图（柱状图）双y轴

![image-20221118104115436](https://img-blog.csdnimg.cn/0b63c52fe897429bb8454bcbda0cb432.png)

[参考链接]: https://blog.csdn.net/u012320487/article/details/124199687

#### 5.使用echarts5

```js
//安装
npm i echarts5 -S
//引用
import * as echarts5 from "echarts5";
//添加图表后使用
const pieItem = echarts5.init(this.$refs.pieItem);
pieItem.setOption(option);
```

###### `注意：在vue中使用echarts时，一定得放到mounted生命周期，必须得dom元素挂载后再去渲染，如果是react中则放到useEffect中`

#### 6.图形不展示的问题

```
1.可能是放错了生命周期，例如在vue中，放到了created钩子中，必须放到dom挂载后
2.宽高没有设置，如果不展示，可以先审查元素，如果canvas中的height或width为0也不展示
```

按需引入等具体配置请

[参考官网]: https://echarts.apache.org/handbook/zh/basics/import

