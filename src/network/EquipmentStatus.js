import {request} from "@/network/request";

export function getEquipmentStatus(){
    return request({
        url:'/EquipmentStatus',
    })
}

export function getTmpHum(){
    return request({
        url:'/TemperatureStatus'
    })
}