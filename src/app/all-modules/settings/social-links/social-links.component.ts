import { Component, OnInit } from '@angular/core';
import { LogarithmicScale } from 'chart.js';
import { DataService, routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  public routes = routes;
  public skillsArray: any = [1];
  public socialLinks: any = [];

  constructor(public data:DataService) { 
    this.socialLinks = this.data.socialLinks;
  }
 

  ngOnInit(): void {
   
  }
 delete(index:any){
  this.socialLinks.splice(index, 1)
 } 
 add(){
  this.socialLinks.push( {
    icon:"github",
    placeholder:"Social Link"
  })
 }
}
