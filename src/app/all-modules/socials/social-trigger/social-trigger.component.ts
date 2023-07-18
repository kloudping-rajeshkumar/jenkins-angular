import { Component, OnInit, ViewChild } from "@angular/core";
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
import { SocialTrigger } from './social-trigger.model';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'app-social-trigger',
  templateUrl: './social-trigger.component.html',
  styleUrls: ['./social-trigger.component.scss']
})
export class SocialTriggerComponent implements OnInit {
  public lstSocialTrigger: any = [];
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
  public socialTriggerForm: UntypedFormGroup;
  public quickSocialTriggerForm: UntypedFormGroup;
  public isActive: boolean = false;
  public socialTrigger: SocialTrigger;
  public recentViewed: Array<any> = [];
  public filterValue: string = "All SocialTriggers";
  public saveEmail: boolean = false;
  public deleteid: string = "";
  public modelError: boolean | undefined;
   
  @ViewChild('paginator') paginator!: MatPaginator;
  // @ViewChild(Sort) matSort!: Sort;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('emailclosebutton') emailCloseButton: any;
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(private data: DataService, private fb: UntypedFormBuilder, private guard: GroupGuard ,private toast: ToasterService) {
    this.socialTrigger = new SocialTrigger({});
    this.socialTriggerForm = this.createSocialTriggerForm();
    this.quickSocialTriggerForm = this.createQuickSocialTriggerForm();
    
  }

  ngOnInit() {
    this.onFilterd();
    this.getEmailtemplate();
  }
  
//email trigger
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  emaillist: Array<any> = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      this.emaillist.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: Array<any>): void {
    const index = this.emaillist.indexOf(item);

    if (index >= 0) {
      this.emaillist.splice(index, 1);
    }
  } 

//quick trigger modal
readonly separatorKeysCodes1 = [ENTER, COMMA] as const;
emaillist1: Array<any> = [];

add1(event: MatChipInputEvent): void {
  const value1 = (event.value || '').trim();

  // Add our item
  if (value1) {
    this.emaillist1.push({ name1: value1 });
  }

  // Clear the input value
  event.chipInput!.clear();
}

remove1(item1: Array<any>): void {
  const index = this.emaillist1.indexOf(item1);

  if (index >= 0) {
    this.emaillist1.splice(index, 1);
  }
} 
  resetform() {
    this.socialTriggerForm.reset(new SocialTrigger({ date: null }));
  }
  resetform1() {
    this.quickSocialTriggerForm.reset(new SocialTrigger({ date: null }));
  }
  public onFilterd() {
    
    
    var model = { type: this.filterValue, recentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.recentIds = JSON.parse(localStorage.getItem("RecentTrigger") || '[]');
    }
    else {

    }
    this.serialNumberArray=[];
    this.data.getSocialTrigger(model).subscribe((res: any) => {
      this.lstSocialTrigger=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstSocialTrigger.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }
  edit(model: any) {
    this.socialTrigger = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentSocialTrigger") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentSocialTrigger", JSON.stringify(this.recentViewed));
    }
  }

  deleteSocialTriggers(id: any) {
    

    if (id != '') {
      this.deleteid = id;
    }
    else {
      this.data.DeleteSocialTriggers(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          this.setTableData(this.filterValue);
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
    this.socialTrigger = model;
    let Triggerid = model.id;
    this.data.AddFollower(Triggerid, "6").subscribe((res: any) => {
      if (res == true) {
        this.setTableData(this.filterValue);
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

  
  updateSocialTrigger(fromData: any) {
    
    if (fromData != '') {
      this.socialTriggerForm.patchValue(fromData);
    }
    else {
      
      let model = this.socialTriggerForm.getRawValue();
      this.data.updateSocialTrigger(model).subscribe((res: any) => {
        this.setTableData(this.filterValue);
        this.onFilterd();
        this.closebutton.nativeElement.click();  
        if (model.id == '00000000-0000-0000-0000-000000000000') 
          this.toast.typeSuccess('sucessfully added ' + model.triggerName);
        else
          this.toast.typeSuccess('Sucessfully Updated ' + model.triggerName);

    });
    }
  }

  getEmailtemplate() {
    
    var model = { type: "Get Trigger", recentIds: [] };
    this.data.getEmailTemplate(model).subscribe((res: any) => {
      this.template = res.data;
    });

  }
  createQuickSocialTriggerForm(): UntypedFormGroup {
    return this.fb.group({
     templateId: ['', [Validators.required,]],
     fromEmail: ['',[Validators.required,]],
     emailTo: ['',[Validators.required,]],
     saveToSendItems: ['false',[Validators.required,]],
    });
  }
  createSocialTriggerForm(): UntypedFormGroup {
    return this.fb.group({

     id: [this.socialTrigger.id],
     triggerName: ['', [Validators.required,]],
     templateId: ['', [Validators.required,]],
     cronExpression:['',[Validators.required,]],
     fromEmail: ['',[Validators.required,]],
     emailTo: ['',[Validators.required,]],
     saveToSendItems: ['false',[Validators.required,]],
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
    this.lstSocialTrigger = res;
    this.dataSource = new MatTableDataSource<any>(this.lstSocialTrigger);
    this.calculateTotalPages(this.lstSocialTrigger.length, this.pageSize);
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstSocialTrigger = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstSocialTrigger.slice();

    if (!sort.active || sort.direction === '') {
      this.lstSocialTrigger = data;
    } else {
      this.lstSocialTrigger = data.sort((a: any, b: any) => {
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
      this.setTableData(this.filterValue);
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.setTableData(this.filterValue);
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
    this.setTableData(this.filterValue);
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.setTableData(this.filterValue);
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
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}

