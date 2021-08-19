import Mock from "mockjs"
import {ItemStyleArray} from "@/common/olorItem";


Mock.mock('/api/EquipmentStatus',{
    'life|4':['@integer(10,100)'],
    'ele|4':['@integer(10,100)']
})

Mock.mock('/api/TemperatureStatus',{
    'tmp|10':['@integer(10,100)'],
    'humidity|10':['@integer(10,100)']
})

Mock.mock('/api/SlopeRate',{
    'slope|25':['@integer(5,40)'],
    'title':'塔筒倾斜度',
    'title_en':'Tower inclination'
})

Mock.mock('/api/Electricity',{
    'electricity|10':['@integer(20000,120000)']
})

Mock.mock('/api/PowerGeneration',()=>{
    let message = Mock.mock({
        'list|3': [{
            'value|20-40': 200,
        }]
    })
    for (let i = 1 ; i <= message.list.length ; i++){
        message.list[i-1].name = i + '号机'
    }
    return message.list
})

Mock.mock('/api/ToadyGeneration',{
    'generation|62425-106320':50000
})

Mock.mock('/api/MachineryLoad',{
    'list|1':[{
        'num1|30-97': 30,
        'num2|30-97': 30,
        'num3|30-97': 30,
    }]
})

Mock.mock('/api/AffectHealth',()=>{
    const  nameList = ['电压','扇叶','基础混凝土','寿命','风力','温度']
    let dateNum = Mock.mock({
        'list|6':[{
            'value':'@float(8,21,1,1)'
        }]
    })
    for (let i = 0 ; i<dateNum.list.length; i++){
        dateNum.list[i].name = nameList[i]
        dateNum.list[i].itemStyle = ItemStyleArray[i]
    }
    return dateNum
})