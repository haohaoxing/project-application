
import {AdministratorURL} from "../commons/URLConfig"
export default class AdministratorApi{
    static  getAdministratorList(cb){
        fetch(AdministratorURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}
