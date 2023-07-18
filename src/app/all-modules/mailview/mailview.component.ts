import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-mailview',
  templateUrl: './mailview.component.html',
  styleUrls: ['./mailview.component.scss']
})
export class MailviewComponent implements OnInit {
  public routes = routes;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };
  constructor() { }

 
    ngOnInit() {

  }

}
