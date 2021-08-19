import {request} from "@/network/request";

export function getAffectHealth(){
    return request({
        url:'/AffectHealth'
    })
}