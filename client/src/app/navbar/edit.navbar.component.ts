import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AceEditorComponent } from 'ng2-ace-editor';
import {Navbar} from './models/navbar';
import {FormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import 'brace/mode/json' ;
import 'brace/theme/github';
@Component({
  selector: 'edit-navbar-component',
  templateUrl: './edit.navbar.component.html',
  styleUrls: ['./edit.navbar.component.scss']
})
export class EditNavbarComponent implements OnInit, AfterViewInit{
  
  @ViewChild('editor') editor:AceEditorComponent;
  text:string;
  error:string;
  constructor(private navbarService:NavbarService) {}

  ngOnInit() {
    this.resetNavbar();
  }
  ngAfterViewInit(): void {
    this.editor.setTheme('github');
    this.editor.setMode('json');
    this.editor.setOptions({
      showPrintMargin:false,
      maxLines:Infinity,
      wrap:true,
      autoScrollEditorIntoView:true
    });
  }
  saveNavbar():void{
    try {
      let navbar:Navbar = JSON.parse(this.text) as Navbar;
      this.navbarService.updateNavbar(navbar);
    }catch(err){
      this.error = "Invalid navbar object";
    }
  }
  resetNavbar():void{
    this.text = JSON.stringify(this.navbarService.getNavbar(), null, 2);
    this.error=null;
  }  
}
