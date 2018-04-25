import {ZHAOFEI} from "../commons/URLConfig"

export default class zhaoFeiApi{
    static  getZhaoFei(cb){
        fetch(ZHAOFEI).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}