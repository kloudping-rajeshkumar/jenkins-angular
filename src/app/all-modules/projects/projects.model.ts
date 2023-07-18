import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';

export class Project {
    id: string;
    
    projectName:string;
    status:string;
    category: string;
    userResponsible: string;
    pipeline:string;
    stage: string;
    description: string;
    tagList:string;
    visibility:string;

   

 
 
  constructor(project:any) {
    {
      
      this.id = project.id || '00000000-0000-0000-0000-000000000000';
      this.projectName = project.projectName || '';
      this.status = project.status || '';
      this.category = project.category || '';
      this.userResponsible = project.userResponsible || '';
      this.pipeline = project.pipeline || '';
      this.stage = project.stage || '';
      this.description = project.description || '';
      this.tagList = project.tagList || '';
      this.visibility = project.visibility || '';
     
      
     
    
    }
  }
  
}
