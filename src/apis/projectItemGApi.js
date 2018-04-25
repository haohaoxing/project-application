import {EquipmentGURL} from "../commons/URLConfig"
export default class projectItemGApi{
    static  getPurchasedEquipmentGList(cb){
        fetch(EquipmentGURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}