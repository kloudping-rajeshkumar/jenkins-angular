import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable,BehaviorSubject,Subject } from 'rxjs';
import {environment} from '../../../../environments/environment';
import  {FileUpload} from './file.model'


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  public fileInfos: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.fileInfos);
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.apiUrl}FileUpload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req,);
  }
  ChangeFileInfo(item: any) {
   this.messageSource.next(item)
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}files`);
  }
}