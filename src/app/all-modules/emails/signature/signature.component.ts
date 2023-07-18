import { Component, OnInit, ViewChild } from '@angular/core';
import { routes ,ToasterService} from 'src/app/shared/core.index';
import { DataService } from "src/app/shared/data/data.service";
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
// import { ActivatedRoute,Router } from '@angular/router';
import {Signature} from './signature.model'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import{AngularEditorConfig} from'@kolkov/angular-editor';
import * as _ from 'lodash';
import { idLocale } from 'ngx-bootstrap/chronos';
import {FileUploadService} from '../../shared/file-uploads/file-upload.service'



@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  public routes = routes;
  public signature: Signature;
  public signatureForm: UntypedFormGroup ;
  public categories: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public lstSignature: any = [];
  public emailTemplate: any = [];
  public showFilter: boolean = false;
  public searchDataValue = '';
  public enable: boolean = false;
  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public pageSizes = [5, 10, 15, 20];
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  public template:Signature = new Signature({});
  public modelError: boolean | undefined;
  public isActive: boolean = false;

  public recentViewed: Array<any> = [];
  public deleteid: string = "";
  public title: string = "";
  public modelTitle: boolean = false;
  router: any;
  //** / pagination variables
  fileInfos: Array<any> = [];

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
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(private data: DataService,private fb: UntypedFormBuilder,private toast: ToasterService,public upload: FileUploadService) { 
    this.signature=new Signature({});

    this.signatureForm = this.createsignatureForm();
    this.upload.currentMessage.subscribe(item=>{
      
      if(item.length!=0)
        this.fileInfos.push(item);

    })
  }
  
  ngOnInit() {
    this.onFilterd();
    
   
  }

  resetform() {
    this.signatureForm.reset(new Signature({ date: null }));
  }

  public onFilterd() { 
    
   
    this.serialNumberArray=[];
    this.data.getSignature().subscribe((res: any) => {
      this.lstSignature=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstSignature.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }

  addStatus(model: any) {
    this.data.AddStatus(model.id).subscribe((res: any) => {
      this.onFilterd();
    });
  }

  createsignatureForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.signature.id],
     
      name: ['', [Validators.required,]],
      body: ['', [Validators.required,]],
      
      fromEmail: ['', [Validators.required,]],
    });
  }
  
  deletesignature(model:any) {
   
    let id = model.id;
    let title = model.title;
     if (id != undefined || '') {
       this.deleteid = id;
       this.title=title;
       
     }
     else {
       this.data.DeleteSignature(this.deleteid).subscribe((res: any) => {
         if (res == true) {
           
           this.onFilterd();
           this.deleteclosebutton.nativeElement.click();
 
         }
        else {
           //Error says already exists
         }
       });
       this.toast.typeWarning('successfully removed ' +this.title);   
     }
   }

  recent(model:any)
  {
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentSignature") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentSignature", JSON.stringify(this.recentViewed));
    }
  }

  addFollower(model: any) {
    this.data.AddFollower(model.id, "4").subscribe((res: any) => {
      if (res == true) {
        
        this.modelError = false;    
      }
      else {
        this.modelError = true;
      }
    });
  }

  public updateSignature(model: any){
    
    if (model != '') {
      this.modelTitle=true;
      this.signatureForm.patchValue(model);
      let fileList=_.split(model.fileList,",");
      for(var i = 0;i<fileList.length;i++) { 
        this.upload.ChangeFileInfo({fileName: fileList[i],fileId:'' } );
      
      }

    }
    else {
      
    let model = this.signatureForm.getRawValue();
    model.fileList=this.fileInfos;
    this.data.updateSignature(model).subscribe((res: any) => {
      this.onFilterd();
      this.closebutton.nativeElement.click();
      this.modelTitle=false;
      this.fileInfos=[];
      
    });
    
  }
}


  private setTableData(res: any): void {
    this.lstSignature = res;
    this.dataSource = new MatTableDataSource<any>(this.lstSignature);
    this.calculateTotalPages(this.lstSignature.length, this.pageSize);
  }
  
  public searchData(value: any): void {
    
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstSignature = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.categories.slice();

    if (!sort.active || sort.direction === '') {
      this.categories = data;
    } else {
      this.categories = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (var i = 1; i <= this.totalPages; i++) {
      let limit = pageSize * i;
      let skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
  onTableDataChange(event: any) {
    if (event == "2") {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.onFilterd();
    } else if (event == "1") {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.onFilterd();
    }
    //this.currentPage=event;
    //this.onFilterd();
  }
  onTableSizeChange(event: any): void {
    this.PageSize = event.target.value;
    this.currentPage = 1;
    this.onFilterd();
  }
}
