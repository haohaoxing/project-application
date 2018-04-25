import {UserApplyURL} from "../commons/URLConfig"

export default class projectItemApi{
    static  getUserApplyList(cb){
        fetch(UserApplyURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}