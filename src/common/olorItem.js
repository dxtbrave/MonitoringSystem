import * as echarts from "echarts"

export const SlopeColor = [
    {
        color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
            offset: 0,
            color: 'rgba(105,233,255,0)'
        }, {
            offset: 1,
            color: 'rgba(105,233,255,.74)'
        }])
    }
]

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


const ItemStyleArray = [
    {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#8B008B'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#BA55D3'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#9400D3'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#8B008B'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#4169E1'
            }])
        }
    },
    {
        normal: {
            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#29c1ff'
            }, {
                offset: 1,
                color: '#87CEFA'
            }])
        }
    },
]

export const dateNum = [
    { value: 16.2, name: "电压", itemStyle: ItemStyleArray[0] },
    { value: 14.6, name: "扇叶", itemStyle: ItemStyleArray[1] },
    { value: 12.7, name: "基础混凝土", itemStyle: ItemStyleArray[2] },
    { value: 10.4, name: "寿命", itemStyle: ItemStyleArray[3] },
    { value: 9.5, name: "风力", itemStyle: ItemStyleArray[4] },
    { value: 8.5, name: "温度", itemStyle: ItemStyleArray[5] },
]