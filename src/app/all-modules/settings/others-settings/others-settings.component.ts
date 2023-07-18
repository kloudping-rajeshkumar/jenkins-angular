import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-others-settings',
  templateUrl: './others-settings.component.html',
  styleUrls: ['./others-settings.component.scss']
})
export class OthersSettingsComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
