import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';

export class Workflows {
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

   

 
 
  constructor(workflows:any) {
    {
      
      this.id = workflows.id || '00000000-0000-0000-0000-000000000000';
      this.projectName = workflows.projectName || '';
      this.status = workflows.status || '';
      this.category = workflows.category || '';
      this.userResponsible = workflows.userResponsible || '';
      this.pipeline = workflows.pipeline || '';
      this.stage = workflows.stage || '';
      this.description = workflows.description || '';
      this.tagList = workflows.tagList || '';
      this.visibility = workflows.visibility || '';
     
      
     
    
    }
  }
  
}
