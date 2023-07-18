import { Component, OnInit, ViewChild,ElementRef } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { formatDate } from '@angular/common';
import { GroupGuard } from 'src/app/group.guard';
import * as _ from 'lodash';
import { EmailTrigger } from './email-trigger.model';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
@Component({
  selector: 'app-email-trigger',
  templateUrl: './email-trigger.component.html',
  styleUrls: ['./email-trigger.component.scss']
})
export class EmailTriggerComponent implements OnInit {
  public lstTrigger: any = [];
  public routes = routes;
  public Trigger: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public showAccordion: any;
  public template: any = [];
  public showFilter: boolean = false;
  public searchDataValue = '';
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
  //** / pagination variables
  public emailTriggerForm: UntypedFormGroup;
  public isActive: boolean = false;
  public emailtrigger: EmailTrigger;
  public recentViewed: Array<any> = [];
  public filterValue: string = "All Triggers";
  public saveEmail: boolean = false;
  public signature: any = [];
  public deleteid: string = "";
  public modelError: boolean | undefined;
  @ViewChild('auto') auto: any; //this is here to help tslint to see this variable and not complain about it.
  @ViewChild('input') input: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  // @ViewChild(Sort) matSort!: Sort;
  @ViewChild('closebutton') closebutton: any;
 
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(private data: DataService, private fb: UntypedFormBuilder, private guard: GroupGuard ,private toast: ToasterService) {
    this.emailtrigger = new EmailTrigger({});
    this.emailTriggerForm = this.createEmailTriggerForm();
  }

  ngOnInit() {
    this.onFilterd();
    this.getEmailtemplate();
  }
  
//email trigger
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  emailcc: Array<any> = [];
  emailto: Array<any> = [];
  emailbcc: Array<any> = [];

  add(event: MatChipInputEvent,list:Array<any>): void {
    const value = (event.value || '').trim();
   
    // Add our item
    if (value) {
      list.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: Array<any>,list:Array<any>): void {
    const index = list.indexOf(item);

    if (index >= 0) {
      list.splice(index, 1);
    }
    
  } 

  resetform() {
    
    this.emailTriggerForm.reset(new EmailTrigger({ date: null }));
    this.emailto=[];
    this.emailcc=[];
    this.emailbcc=[];   
  }
  
  public onFilterd() {    
    
    var model = { type: this.filterValue, recentIds: [] };
    if (this.filterValue == "Recently Viewed") {
      model.recentIds = JSON.parse(localStorage.getItem("RecentTrigger") || '[]');
    }
    else {

    }
    this.serialNumberArray=[];
    this.data.getEmailTrigger(model).subscribe((res: any) => {
      this.lstTrigger=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstTrigger.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }

  getSignature(event:any){
    
    
    this.data.getSign(event.target.value).subscribe((res: any) => {
      this.signature=res.data;
    });

  }

  edit(model: any) {

    this.emailtrigger = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentTrigger") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentTrigger", JSON.stringify(this.recentViewed));
    }
  }

  deleteTriggers(id: any) {    

    if (id != '') {
      this.deleteid = id;
    }
    else {
      this.data.DeleteTriggers(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();

        }
       else {
          //Error says already exists
        }
      });
      this.toast.typeWarning('successfully removed ');         
    }
  }

  addFollower(model: any) {
    this.isActive = !this.isActive;
    this.emailtrigger = model;
    let Triggerid = model.id;
    this.data.AddFollower(Triggerid,3).subscribe((res: any) => {
      if (res == true) {
        this.onFilterd();
        this.modelError = false;
       
      }
      else {
        this.modelError = true;
      }
    });


  }

  QueuSave(model: any) {
    this.data.AddStatus(model.id).subscribe((res: any) => {
    });
  }


 
  updateEmailTrigger(fromData: any) {
    
    if (fromData != '') {
      this.emailTriggerForm.patchValue(fromData);
     
    }
    else {
      
      let model = this.emailTriggerForm.getRawValue();
      model.emailTo=this.emailto.toString();
      this.data.updateEmailTrigger(model).subscribe((res: any) => {
        this.onFilterd();
        this.closebutton.nativeElement.click();  
        if (model.id == '00000000-0000-0000-0000-000000000000') 
          this.toast.typeSuccess('sucessfully added ' + model.triggerName  );
        else
          this.toast.typeSuccess('Sucessfully Updated ' + model.triggerName  );

    });
    this.resetform();
    }
  }

  getEmailtemplate() {
    var model = { type: "Get Email Trigger", recentIds: [] };
    this.data.getEmailTemplate(model).subscribe((res: any) => {
      this.template = res.data;
     
    });

  }

  createQuickEmailTriggerForm(): UntypedFormGroup {
    return this.fb.group({
     templateId: ['', [Validators.required,]],
     fromEmail: ['',[Validators.required,]],
     emailTo: [''],
     emailCc: [''],
     emailBcc: [''],
     signatureName: [''],
     saveToSendItems: [false],
     emailMonitor: [false]
    });
  }
  createEmailTriggerForm(): UntypedFormGroup {
    return this.fb.group({

     id: [this.emailtrigger.id],
     triggerName: ['', [Validators.required,]],
     templateId: ['', [Validators.required,]],
     cronExpression:['',[Validators.required,]],
     fromEmail: [''],
     signatureName: [''],
     emailTo: [''],
    });
  }
  showAccordions(data: string) {
    if (this.showAccordion === data) {
      this.showAccordion = '';
    } else {
      this.showAccordion = data;
    }
  }
  private setTableData(res: any): void {
    this.lstTrigger = res;
    this.dataSource = new MatTableDataSource<any>(this.lstTrigger);
    this.calculateTotalPages(this.lstTrigger.length, this.pageSize);
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstTrigger = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstTrigger.slice();

    if (!sort.active || sort.direction === '') {
      this.lstTrigger = data;
    } else {
      this.lstTrigger = data.sort((a: any, b: any) => {
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

