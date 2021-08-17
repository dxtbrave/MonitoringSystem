const Mock = require('mockjs')

export function getFuZai(){
    let message = Mock.mock({
        'list|1': [{
            'num1|30-97': 30,
            'num2|30-97': 30,
            'num3|30-97': 30,
        }]
    })
    return message.list
}