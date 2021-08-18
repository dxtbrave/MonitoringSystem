import {request} from "@/network/request";

export function getPowerGeneration(){
    return request({
        url:'/PowerGeneration'
    })
}