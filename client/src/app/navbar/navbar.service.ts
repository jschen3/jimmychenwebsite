import {Injectable} from '@angular/core';
import {Navbar} from './models/navbar';
import { PageLink } from './models/pagelink';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NavbarService{
    navbar:Navbar;
    updateNavbarUrl:string = "/updateNavbar";
    constructor(private http:HttpClient){

    }
    getNavbar(): Navbar {
        this.navbar = {
            title:"Jimmy Chen's Website",
            text:null,
            brand:null,
            pageLinks:[
                   {"url":"/home","text":"Home"},
                   {"url":"/tech","text":"Tech"},
                   {"url":"/life","text":"Life"},
                   {"url":"/diary","text":"Diary"},
                   {"url":"/projects","text":"Projects"},
                   {"url":"/aboutme", "text":"About me"}]
        };
        return this.navbar;
        //this.callNavbarUrl().then(navbar=>{this.navbar=navbar});
    }

    public updateNavbar(navbar:Navbar){
        return this.http.post<Navbar>(this.updateNavbarUrl, this.navbar);
    }
    private callNavbarUrl(){
        return this.http.get<Navbar>(this.updateNavbarUrl);
    }

}