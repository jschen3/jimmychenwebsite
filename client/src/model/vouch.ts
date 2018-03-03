export class Vouch{
    vouch_id:string;
    user_id:string;
    vouchQty:number;
    constructor(vouchId:string, userId:string, quantity:number){
        this.vouch_id=vouchId;
        this.user_id=userId;
        this.vouchQty=quantity;
    }
}
