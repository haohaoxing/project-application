import {ProcurementProgressURl} from "../commons/URLConfig";

export default class ProcurementProgressApi{
    static  getPurchasingList(cb){
        fetch(ProcurementProgressURl).then((response)=>{
           response.json().then((data)=>{
               cb(data)
           })
        })
    }
}