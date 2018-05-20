import {PageLink} from './pagelink';
export class Navbar{
    constructor(
        public title:string,
        public brand:string,
        public text:string,
        public pageLinks:PageLink[]
    ){}
}