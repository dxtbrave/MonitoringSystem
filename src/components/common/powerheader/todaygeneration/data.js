const Mock = require('mockjs')

export function getTodayGeneration(){
    let message = Mock.mock({
        'list|1': [{
            'generation|62425-106320': 50000,
        }]
    })
    return message.list.generation
}