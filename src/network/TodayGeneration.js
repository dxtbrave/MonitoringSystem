import {request} from "@/network/request";

export function getToadyGeneration(){
    return request({
        url:'/ToadyGeneration'
    })
}