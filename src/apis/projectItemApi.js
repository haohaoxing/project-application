import {EquipmentURL} from "../commons/URLConfig"

export default class projectItemApi{
    static  getPurchasedEquipmentList(cb){
        fetch(EquipmentURL).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}
