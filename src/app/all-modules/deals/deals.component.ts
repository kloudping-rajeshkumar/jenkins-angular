import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { UntypedFormControl, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { formatDate } from '@angular/common';
import { GroupGuard } from 'src/app/group.guard';
import { groups } from 'src/app/auth-config';
import * as _ from "lodash";
import { Deal } from "./deals.model";
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})

export class DealsComponent implements OnInit {
  public lstDeal: any = [];
  public showAccordion: any;
  public routes = routes;
  public deals: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public company: any = [];
  public showFilter: boolean = false;
  public searchDataValue = '';
  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public totalData: any = 0;
  public skip: number = 0;
  public dealName: String="";
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  //** / pagination variables
  public recentViewed: Array<any> = [];
  public filterValue: string = "All Deals";
  public dealForm: UntypedFormGroup;
  public deal: Deal;
  public isActive: boolean = false;
  public deleteid: string = "";
  public modelError: boolean | undefined;

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(private data: DataService, private fb: UntypedFormBuilder, private guard: GroupGuard,private toast: ToasterService) {
    this.deal = new Deal({});
    this.dealForm = this.createContactForm();
  }
  showAccordions(data: string) {
    if (this.showAccordion === data) {
      this.showAccordion = ''
    }
    else {
      this.showAccordion = data;
    }
  }
  ngOnInit() {
    this.onFilterd();
    this.getcompany();

  }

  resetform() {

    this.dealForm.reset(new Deal({ date: null }));
  }

  public onFilterd() {
    
    var model = { type: this.filterValue, recentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.recentIds = JSON.parse(localStorage.getItem("RecentDeal") || '[]');
    }
    else {

    }
    this.serialNumberArray=[];
    this.data.getDealGetAll(model).subscribe((res: any) => {
      this.lstDeal=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstDeal.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }
  edit(model: any) {
    
    this.deal = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentDeal") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentDeal", JSON.stringify(this.recentViewed));
    }
  }

  updateDeals(formData: any) {
  
    if (formData != '') {

      this.dealForm.patchValue(formData);
    }
    else { 

      let formData = this.dealForm.getRawValue();
      formData.forecastDate = formatDate(formData.forecastDate, 'yyyy-MM-dd', 'en-US');
      formData.actualDate = formatDate(formData.actualDate, 'yyyy-MM-dd', 'en-US');
      this.data.updateDeals(formData).subscribe((res: any) => {
        this.onFilterd();
        this.closebutton.nativeElement.click();
        if (formData.id == '00000000-0000-0000-0000-000000000000') 
          this.toast.typeSuccess('successfully added ' + formData.dealName);
        else
          this.toast.typeSuccess('Successfully Updated ' +formData.dealName);

      });
     
    }
  }
  deleteDeals(model: any) {
    
    let id = model.id;
    let dealName= model.dealName;
     if (id != undefined || '') {
       this.deleteid = id;
       this.dealName=dealName;
       
     }
    else {
      this.data.deleteDeals(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();
        } 
      });
      this.toast.typeWarning("successfully removed " + this.dealName);
    }
  }

  getcompany() {
     
    this.data.getCompanyNames().subscribe((res: any) => {
      this.company = res.data;
    });

  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.deal.id],
      dealName: ['', [Validators.required,]],
      company: ['', [Validators.required,]],
      category: ['', [Validators.required,]],
      probability: ['', [Validators.required,]],
      forecastDate: [''],
      actualDate: [''],
      user: [''],
      dealValue: [''],
      bidAmt: [''],
      fixBid: [''],
      description: [''],
      pipelines: [''],
      stage: [''],
    });
  }
  addFollower(model: any) {
    
    this.deal = model;
    this.isActive = !this.isActive;
    let DealsId = model.id;
    this.data.AddFollower(DealsId, "7").subscribe((res: any) => {
      if (res == true) {
        this.onFilterd();
        this.modelError = false;
       
      }
      else {
        this.modelError = true;
      }
    });


  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstDeal = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstDeal.slice();

    if (!sort.active || sort.direction === '') {
      this.lstDeal = data;
    } else {
      this.lstDeal = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  private setTableData(res: any): void {
    this.lstDeal = res;
    this.dataSource = new MatTableDataSource<any>(this.lstDeal);
    this.calculateTotalPages(this.lstDeal.length, this.pageSize);
  }
  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.onFilterd()
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.onFilterd()
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
    this.onFilterd()
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.onFilterd()
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
