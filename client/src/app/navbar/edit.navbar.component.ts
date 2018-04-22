import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AceEditorComponent } from 'ng2-ace-editor';
import 'brace/mode/json';
import 'brace/theme/github';
@Component({
  selector: 'edit-navbar-component',
  templateUrl: './edit.navbar.component.html',
  styleUrls: ['./edit.navbar.component.scss']
})
export class EditNavbarComponent implements OnInit, AfterViewInit{
  
  @ViewChild('editor') editor:AceEditorComponent;
  text:string;
  constructor(private navbarService:NavbarService) {}

  ngOnInit() {
    this.text = JSON.stringify(this.navbarService.getNavbar(), null, 2);
  }
  ngAfterViewInit(): void {
    this.editor.setTheme('github');
    this.editor.setMode('json');
    this.editor.setOptions({
      showPrintMargin:false,
      maxLines:Infinity,
      wrap:true
      autoScrollEditorIntoView:true,
    });
  }  
}
