import Mock from "mockjs"
// 使用mockjs模拟数据
// Mock.mock('/api/EquipmentStatus',(req,res)=>{
//     return Mock.mock({
//         'list|2':[{
//             '"number1"|1-100':1,
//             '"number2"|1-100':1,
//             '"number3"|1-100':1,
//             '"number4"|1-100':1,
//         }]
//     })
// })
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