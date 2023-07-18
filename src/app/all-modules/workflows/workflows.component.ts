import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { GroupGuard } from "src/app/group.guard";
import { groups } from "src/app/auth-config";
import { Workflows } from "./workflows.model";
import { formatDate } from '@angular/common';
import * as _ from 'lodash';
@Component({
  selector: 'app-projects',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {

  public showAccordion: any;
  public lstWorkflows: any = [];
  public routes = routes;
  public projects: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public showFilter: boolean = false;
  public searchDataValue = '';
  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public pageSizes = [5, 10, 15, 20];
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public projectName: string="";
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  public modelError: boolean | undefined;
  public deleteid: string = "";
  public projectForm: UntypedFormGroup | any;
  public isActive: boolean = false;
  public workflows: Workflows;
  public filterValue: string = "All Workflows";
  public recentViewed: Array<any> = [];
  //** / pagination variables
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('deleteclosebutton') deleteclosebutton: any;
  constructor(private data: DataService, private fb: UntypedFormBuilder, private guard: GroupGuard,private toast: ToasterService) {
    this.workflows = new Workflows({});
    this.projectForm = this.createContactForm();

  }

  ngOnInit() {
    this.onFilterd();
  }


  resetform() {

    this.projectForm.reset(new Workflows({}));
  }
  
  
  public onFilterd() {
    debugger;
    var model = { type: this.filterValue, recentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.recentIds = JSON.parse(localStorage.getItem("RecentProject") || '[]');
    }
    else {

    }
    this.serialNumberArray=[];
    this.data.getWorkflowsGetAll(model).subscribe((res: any) => {
      this.lstWorkflows=[];
      this.totalData = res.totalData;
       res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstWorkflows.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }
  edit(model: any) {
    
    this.workflows = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(localStorage.getItem("RecentProject") || '[]');
    var index = _.findIndex(this.recentViewed, function (o: any) { return o.partitionKey == id });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentProject", JSON.stringify(this.recentViewed));
    }



  }
  addFollower(model: any) {
    this.isActive = !this.isActive;
    this.workflows = model;
    let Projectid = model.id;
    this.data.AddFollower(Projectid, "Project").subscribe((res: any) => {
      if (res == true) {
        this.setTableData(this.filterValue);
        this.modelError = false;
       
      }
      else {
        this.modelError = true;
      }
    });


  }

  updateWorkflows(formData: any) {
    debugger;
    if (formData != '') {

      this.projectForm.patchValue(formData);
    }
    else {

      let formData = this.projectForm.getRawValue();
      this.data.updateWorkflows(formData).subscribe((res: any) => {
        this.setTableData(this.filterValue);
         this.onFilterd();
         this.closebutton.nativeElement.click(); 
         if (formData.id == '00000000-0000-0000-0000-000000000000') 
        this.toast.typeSuccess('successfully added ' + formData.projectName);
        else
         this.toast.typeSuccess('successfully added ' + formData.projectName);
      });
    
    }
    
  }
  deleteWorkflows(model: any) {
    let id =model.id;
    let projectName=model.projectName;
    if(id != undefined || '')
    {
      this.deleteid = id;
      this.projectName = projectName
    }
    else {
      this.data.DeleteWorkflows(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          this.setTableData(this.filterValue);
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();

        }
       else {
          //Error says already exists
        }
      });
      this.toast.typeWarning('successfully removed ' + this.projectName);      
    }
  }

  
  createContactForm(): UntypedFormGroup {
    return this.fb.group({

      id: [this.workflows.id],
      projectName: ["", [Validators.required]],
      status: ["", [Validators.required]],
      category: ["", [Validators.required]],
      userResponsible: ["", [Validators.required]],
      pipeline: ["", [Validators.required]],
      stage: ["", [Validators.required]],
      description: ["", [Validators.required]],
      tagList: ["", [Validators.required]],
      visibility: ["", [Validators.required]],


    });
    
  }

  showAccordions(data: string) {
    if (this.showAccordion === data) {
      this.showAccordion = ''
    }
    else {
      this.showAccordion = data;
    }
  }

  private setTableData(res: any): void {
    this.lstWorkflows = res;
    this.dataSource = new MatTableDataSource<any>(this.lstWorkflows);
    this.calculateTotalPages(this.lstWorkflows.length, this.pageSize);
  }


  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstWorkflows = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.projects.slice();

    if (!sort.active || sort.direction === '') {
      this.projects = data;
    } else {
      this.projects = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
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
