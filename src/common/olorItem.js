import * as echarts from "echarts"
import {colorArr,colorAlpha} from "@/common/common";
export const SlopeColor = [
    {
        normal:{
            color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: 'rgba(105,233,255,0)'
            }, {
                offset: 1,
                color: 'rgba(105,233,255,.74)'
            }])
        }
    }
]

export const EleColor = [
    {
        normal:{
            color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、上、右、下
                offset: 0,
                color: '#0c75ca'
            }, {
                offset: 1,
                color: '#47efff'
            }])
        }
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


export const ItemStyleArray = [
    {
        borderColor: colorArr[0],
        borderWidth:2,
        shadowBlur: 20,
        shadowColor: "#41a8f8",
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color:colorAlpha[0]
    },
    {
        borderColor: colorArr[1],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr[1],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha[1]
    },
    {
        borderColor: colorArr[2],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr[2],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha[2]
    },
    {
        borderColor: colorArr[3],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr[3],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha[2]
    },
    {
        borderColor: colorArr[4],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr[4],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha[4]
    },
    {
        borderColor: colorArr[5],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr[5],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha[5]
    },
]

