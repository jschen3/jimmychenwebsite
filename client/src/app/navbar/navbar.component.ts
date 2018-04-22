import {Component, OnInit} from '@angular/core';
import {NavbarService} from './navbar.service';
import {Navbar} from './models/Navbar';
@Component({
    selector:'navbar-component',
    templateUrl:'navbar.component.html',
    providers:[NavbarService],
    styleUrls:['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
    navbar:Navbar;
    ngOnInit(): void {
       this.navbar = this.navbarService.getNavbar();
    }
    constructor(private navbarService:NavbarService){
        
    }
}