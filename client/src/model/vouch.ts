export class Vouch{
    vouchId:string;
    userId:string;
    quantity:number;
    constructor(vouchId:string, userId:string, quantity:number){
        this.vouchId=vouchId;
        this.userId=userId;
        this.quantity=quantity;
    }
}
