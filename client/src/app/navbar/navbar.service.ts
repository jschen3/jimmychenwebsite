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
        let navbar:Navbar = {
            title:"Jimmy Chen's Website",
            text:"",
            brand:"",
            pageLinks:[
                   {"url":"/home","text":"Home"},
                   {"url":"/tech","text":"Tech"},
                   {"url":"/life","text":"Life"},
                   {"url":"/diary","text":"Diary"},
                   {"url":"/projects","text":"Projects"},
                   {"url":"/aboutme", "text":"About me"}],
            editMode:false  
        };
        return navbar;
        //this.callNavbarUrl().then(navbar=>{this.navbar=navbar});
    }
    public addLink(link:PageLink){
        this.navbar.pageLinks.concat(link);
        //this.updateNavbar(this.navbar).then(navbar=>{this.navbar=navbar});
    }
    public editText(text:string){
        this.navbar.text=text;
        //this.updateNavbar(this.navbar).then(navbar=>{this.navbar=navbar});
    }
    public editTitle(title:string){
        this.navbar.title=title;
        //this.updateNavbar(this.navbar).then(navbar=>{this.navbar=navbar});
    }
    private updateNavbar(navbar:Navbar){
        return this.http.post<Navbar>(this.updateNavbarUrl, this.navbar);
    }
    private callNavbarUrl(){
        return this.http.get<Navbar>(this.updateNavbarUrl);
    }

}