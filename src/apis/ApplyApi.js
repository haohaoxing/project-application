import {APPLYURL} from "../common/ApplyURI"

export default class ApplyApi {

/*
获取所有信息列表
*/
    static getApplyList(cb){
        fetch(ApplyURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}