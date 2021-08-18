import {request} from "@/network/request";

export function getSlopeRate(){
    return request({
        url:'/SlopeRate'
    })
}