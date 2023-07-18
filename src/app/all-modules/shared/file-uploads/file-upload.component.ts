import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import  {FileUpload} from './file.model'
import {DataService}from '../../../shared/data/data.service'

@Component({
  selector: 'app-upload-files',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class UploadFilesComponent implements OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos: FileUpload[] = [];
  

  constructor(private uploadService: FileUploadService) { 

  }

  ngOnInit(): void {
     this.uploadService.currentMessage.subscribe(item=>{
      
      if(item.length!=0)
        this.fileInfos.push(item);

    })
    
  }
  

  selectFiles(event: any): void {
    
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            
            this.uploadService.ChangeFileInfo(new FileUpload({fileName:event.body.fileName,fileId:event.body.fileId }));
            
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
        }
      });
    }
  }

  uploadFiles(): void {
    
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
}