import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { ToasterService, routes } from 'src/app/shared/core.index';
//import { formatDate } from '@angular/common';
import * as _ from 'lodash';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { GroupGuard } from 'src/app/group.guard';
import { Leads } from './leads.model';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  public lstLeads: any = [];
  public routes = routes;
  public leads: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public showAccordion: any;
  public showFilter: boolean = false;
  public company: any = [];
  public searchDataValue = '';
  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public firstname : string = "";
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
  public leadsForm: UntypedFormGroup | any;
  public lead:Leads;
  public isActive: boolean = false;
  public filterValue: string = "All Leads";
  public recentViewed: Array<any> = [];
  public deleteid: string = '';
  public modelError: boolean | undefined;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(
    private data: DataService,
    private fb: UntypedFormBuilder,
    private guard: GroupGuard
    ,private toast: ToasterService
  ) {
    this.lead = new Leads({});
    this.leadsForm = this.createContactForm();
  }

  ngOnInit() {
    
    this.getcompany();
    this.onFilterd();
  }

  resetform() {
    this.leadsForm.reset(new Leads({ date: null }));
  }


  public onFilterd() {
    
    var model = { LeadsType: this.filterValue, LeadsRecentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.LeadsRecentIds = JSON.parse(localStorage.getItem("RecentLeads") || '[]');
    }
    else {

    }
    this.serialNumberArray=[];
    this.data.getLeadsGetAll(model).subscribe((res: any) => {
      this.lstLeads=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstLeads.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }
  edit(model: any) {
    this.lead = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentLeads") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentLeads", JSON.stringify(this.recentViewed));
    }



  }

  addFollower(model: any) {
    
    this.lead = model;
    this.isActive = !this.isActive;
    let Leadsid = model.id;
    this.data.AddFollower(Leadsid, "5").subscribe((res: any) => {
      if (res == true) {
        this.onFilterd();
        this.modelError = false;
       
      }
      else {
        this.modelError = true;
      }
    });


  }



  updateLeads(formData: any) {
    
    if (formData != '') {
      this.leadsForm.patchValue(formData);

     
    } 
    else {

      let formData = this.leadsForm.getRawValue();

      this.data.updateLeads(formData).subscribe((res: any) => {
        
        this.onFilterd();
        this.closebutton.nativeElement.click();
        if (formData.id == '00000000-0000-0000-0000-000000000000') 
        this.toast.typeSuccess('successfully added ' + formData.firstname  + ' in ' + formData.organization);
      else
        this.toast.typeSuccess('Successfully Updated ' + formData.firstname  + ' in ' + formData.organization);
       
      });
     

    }

  }

  getcompany() {
    this.data.getCompanyNames().subscribe((res: any) => {
      this.company = res.data;
    });
  }

  deleteleads(model: any) {
    let id = model.id; 
    let firstname =model.firstname;
    if (id != undefined || '') {
      this.deleteid = id;
      this.firstname=firstname;
    }
    else {
      this.data.Deleteleads(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();

         
        }
      });
        this.toast.typeWarning('successfully deleted' + this.firstname);

    }
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.lstLeads.id],
      prefix: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      status: ['', [Validators.required]],
      user: [''],
      rating: ['' ],
      email: ['' ],
      phone: ['' ],
      mobilePhone: ['' ],
      fax: [''],
      website: ['' ],
      industry: ['' ],
      employees: ['' ],
      address: [''],
      city: [''],
      title: [''],
      source: [''],
      state: ['' ],
      postcode: ['' ],
      country: ['' ],
      description: ['' ],

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
    this.lstLeads = res;
    this.dataSource = new MatTableDataSource<any>(this.lstLeads);
    this.calculateTotalPages(this.lstLeads.length, this.pageSize);
  }
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstLeads = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstLeads.slice();

    if (!sort.active || sort.direction === '') {
      this.lstLeads = data;
    } else {
      this.lstLeads = data.sort((a: any, b: any) => {
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
