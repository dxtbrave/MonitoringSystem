import {request} from "@/network/request";

export function getElectricity(){
    return request({
        url:'/Electricity'
    })
}