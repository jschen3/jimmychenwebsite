export class User{
    firstName:string;
    lastName:string;
    emailAddress:string;
    address:string;
    paymentDetails;
    constructor(firstName:string, lastName:string, emailAddress:string, address:string, paymentDetails:string){
        this.firstName = firstName;
        this.lastName= lastName;
        this.address = address;
        this.paymentDetails = paymentDetails;
        this.emailAddress= emailAddress;
    }
}