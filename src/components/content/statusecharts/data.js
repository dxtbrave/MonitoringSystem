import * as echarts from "echarts";
export const BarStyleArray = [
    {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#951b3b'
            }, {
                offset: 1,
                color: '#eb3c44'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#0c75ca'
            }, {
                offset: 1,
                color: '#47efff'
            }])
        }
    },
]
