import {APPLYURL} from "../commons/URLConfig"
export default class ApplyApi {

    static getApplyList(cb){
        fetch(APPLYURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}