import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {
  public routes = routes;
  constructor() { }
  copyInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  cutInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('cut');
    inputElement.setSelectionRange(0, 0);
  }
  ngOnInit(): void {
    
  }

}
