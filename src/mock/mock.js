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