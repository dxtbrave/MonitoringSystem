import {request} from "@/network/request";

export function getMachineryLoad(){
    return request({
        url:'/MachineryLoad'
    })
}