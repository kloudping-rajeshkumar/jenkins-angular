import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from "src/app/shared/models/models";
import { Sort } from "@angular/material/sort";
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { formatDate } from "@angular/common";
import { GroupGuard } from "src/app/group.guard";
import { groups } from "src/app/auth-config";
import { Company } from "./companies.model";
import * as _ from "lodash";
@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"],
})
export class CompaniesComponent implements OnInit {
  public lstCompany: any = [];
  public routes = routes;
  public companies: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  public showAccordion: string = "";
  public showFilter: boolean = false;
  public searchDataValue = "";
  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public pageSizes = [5, 10, 15, 20];
  public totalData: any = 0;
  public skip: number = 0;
  public organizationName : string = "";
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  //** / pagination variables
  public companyForm: UntypedFormGroup;
  public company: Company;
  public isActive: boolean = false;
  public recentViewed: Array<any> = [];
  public filterValue: string = "All Companies";
  public deleteid: string = "";
  public modelError: boolean | undefined;
  @ViewChild("closebutton") closebutton: any;
  @ViewChild("deleteclosebutton") deleteclosebutton: any;
  constructor(
    private data: DataService,
    private fb: UntypedFormBuilder,
    private guard: GroupGuard,
    private toast: ToasterService
  ) {
    this.company = new Company({});
    this.companyForm = this.createContactForm();
  }

  ngOnInit() {
    this.onFilterd();
  }

  resetform() {
    this.companyForm.reset(new Company({ date: null }));
  }

  deleteCompany(model: any) {
    let id = model.id; 
    let organizationName =model.organizationName;
    if (id != undefined || '') {
      this.deleteid = id;
      this.organizationName=organizationName;
    }
      
   else {
      this.data.DeleteCompany(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();
        } else {
          //Error says already exists
        }
      });
      this.toast.typeWarning('successfully deleted ' +this.organizationName);
    }
  }

  public onFilterd() {
    var model = { companyType: this.filterValue, companyRecentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.companyRecentIds = JSON.parse(
        localStorage.getItem("RecentCompany") || "[]"
      );
    } else {
    }
    this.serialNumberArray = [];
    this.data.getCompanyGetAll(model).subscribe((res: any) => {
      this.lstCompany = [];
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstCompany.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }
  edit(model: any) {
    this.company = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(
      localStorage.getItem("RecentCompany") || "[]"
    );
    var index = _.findIndex(this.recentViewed, function (o: any) {
      return o.partitionKey == id;
    });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentCompany", JSON.stringify(this.recentViewed));
    }
  }
  addFollower(model: any) {
    this.isActive = !this.isActive;
    this.company = model;
    let Companyid = model.id;
    this.data.AddFollower(Companyid, "2").subscribe((res: any) => {
      if (res == true) {
        this.modelError = false;
      } else {
        this.modelError = true;
      }
    });
  }

  updateCompany(formData: any) {
    if (formData != "") {
      this.companyForm.patchValue(formData);
    } else {
      let formData = this.companyForm.getRawValue();
      formData.datesToRemember = formatDate(
        formData.datesToRemember,
        "yyyy-MM-dd",
        "en-US"
      );
      this.data.updateCompany(formData).subscribe((res: any) => {
        this.onFilterd();
        this.closebutton.nativeElement.click();
        if (formData.id == "00000000-0000-0000-0000-000000000000")
          this.toast.typeSuccess(
            "Successfully Added " + formData.organizationName
          );
        else
          this.toast.typeSuccess(
            "Successfully Updated " + formData.organizationName
          );
      });
    }
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.company.id],
      organizationName: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      fax: ["", []],
      website: ["", []],
      linkedin: ["", []],
      facebook: ["", []],
      twitter: ["", []],
      emailDomains: ["", []],
      billingAddress: ["", []],
      billingCity: ["", []],
      billingState: ["", []],
      billingCountry: ["", []],
      billingPostcode: ["", []],
      shippingAddress: ["", []],
      shippingCity: ["", []],
      shippingState: ["", []],
      shippingCountry: ["", []],
      shippingPostcode: ["", []],
      datesToRemember: ["", []],
      description: ["", [Validators.required]],
    });
  }
  showAccordions(data: string) {
    if (this.showAccordion === data) {
      this.showAccordion = "";
    } else {
      this.showAccordion = data;
    }
  }
  private setTableData(res: any): void {
    this.lstCompany = res;
    this.dataSource = new MatTableDataSource<any>(this.lstCompany);
    this.calculateTotalPages(this.lstCompany.length, this.pageSize);
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstCompany = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstCompany.slice();

    if (!sort.active || sort.direction === "") {
      this.lstCompany = data;
    } else {
      this.lstCompany = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
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
