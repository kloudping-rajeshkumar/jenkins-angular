import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Sort } from "@angular/material/sort";

import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { DataService } from "src/app/shared/data/data.service";
import { ToasterService, routes } from "src/app/shared/core.index";
import { formatDate } from "@angular/common";
import { GroupGuard } from "src/app/group.guard";
import * as _ from "lodash";
import { Contact } from "./contact.model";
import { MatMenuTrigger } from "@angular/material/menu";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  title = "pagination";

  public lstContact: any = [];
  public routes = routes;
  public contacts: Array<any> = [];
  public showAccordion: any;
  public company: any = [];
  public showFilter: boolean = false;
  public searchDataValue = "";
  public name : String = "";
  dataSource!: MatTableDataSource<any>;
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
  public contactForm: UntypedFormGroup;
  public isActive: boolean = false;
  public contact: Contact;
  public recentViewed: Array<any> = [];
  public filterValue: string = "All Contacts";
  public firstname : string = "";
  public deleteid: string = "";
  public modelError: boolean | undefined;
  @ViewChild("paginator") paginator!: MatPaginator;
  // @ViewChild(Sort) matSort!: Sort;
  @ViewChild("closebutton") closebutton: any;
  @ViewChild("deleteclosebutton") deleteclosebutton: any;
  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };
  constructor(
    private data: DataService,
    private fb: UntypedFormBuilder,
    private guard: GroupGuard,
    private toast: ToasterService
  ) {
    this.contact = new Contact({});
    this.contactForm = this.createContactForm();
  }

  ngOnInit() {
    this.onFilterd();
    this.getcompany();
  }

  resetform() {
    this.contactForm.reset(new Contact({ date: null }));
  }

  public onFilterd(): void {
    var model = { type: this.filterValue, recentIds: [] };

    if (this.filterValue == "Recently Viewed") {
      model.recentIds = JSON.parse(
        localStorage.getItem("RecentContact") || "[]"
      );
    } else {
    }
    this.lstContact = [];
    this.serialNumberArray = [];
    this.data.getContactGetAll(model).subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          this.lstContact.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.setTableData(res.data);
    });
  }

  edit(model: any) {
    this.contact = model;
    let id = model.partitionKey;
    this.recentViewed = JSON.parse(
      localStorage.getItem("RecentContact") || "[]"
    );
    var index = _.findIndex(this.recentViewed, function (o: any) {
      return o.partitionKey == id;
    });
    if (index == -1) {
      this.recentViewed.push(model.id);
      localStorage.setItem("RecentContact", JSON.stringify(this.recentViewed));
    }
  }


  deleteContacts(model: any) {
    let id = model.id; 
    let firstname =model.firstname;
    if (id != undefined || '') {

      this.deleteid = id;
      this.firstname=firstname;
    }
      
      
    else {
      this.data.DeleteContacts(this.deleteid).subscribe((res: any) => {
        if (res == true) {
          this.onFilterd();
          this.deleteclosebutton.nativeElement.click();
        } else {
          //Error says already exists
        }
      });
      this.toast.typeWarning("successfully removed " +this.firstname );
    }
  }

  addFollower(model: any) {
    this.isActive = !this.isActive;
    this.contact = model;
    let Contactid = model.id;
    this.data.AddFollower(Contactid, "1").subscribe((res: any) => {
      if (res == true) {
        this.onFilterd();
        this.modelError = false;
      } else {
        this.modelError = true;
      }
    });
  }

  updateContact(formData: any) {
    if (formData != "") {
      this.contactForm.patchValue(formData);
    } else {
      let formData = this.contactForm.getRawValue();
      formData.dueDate = formatDate(formData.dueDate, "yyyy-MM-dd", "en-US");
      formData.birthday = formatDate(formData.birthday, "yyyy-MM-dd", "en-US");
      this.data.updateContacts(formData).subscribe((res: any) => {
        this.onFilterd();
        this.closebutton.nativeElement.click();
        if (formData.id == "00000000-0000-0000-0000-000000000000")
          this.toast.typeSuccess(
            "successfully added " +
              formData.firstname +
              " in " +
              formData.organization
          );
        else
          this.toast.typeSuccess(
            "Successfully Updated " +
              formData.firstname +
              " in " +
              formData.organization
          );
      });
    }
  }

  getcompany() {
    this.data.getCompanyNames().subscribe((res: any) => {
      this.company = res.data;
    });
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.contact.id],

      prefix: ["", [Validators.required]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],

      organization: ["", [Validators.required]],
      title: ["", [Validators.required]],
      email: [""],

      phone: [""],
      homePhone: [""],
      mobilePhone: [""],
      otherPhone: [""],
      assistantPhone: [""],
      assistantName: [""],
      fax: [""],
      linkedin: [""],
      facebook: [""],
      twitter: [""],
      address: [""],
      otherAddress: [""],
      city: [""],
      state: [""],
      otherCity: [""],
      otherState: [""],
      country: [""],
      otherCountry: [""],
      postcode: [""],
      otherPostcode: [""],

      dueDate: [""],
      birthday: [""],
      description: [""],
      permission: [""],
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
    this.lstContact = res;
    this.dataSource = new MatTableDataSource<any>(this.lstContact);
    this.calculateTotalPages(this.lstContact.length, this.pageSize);
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.lstContact = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.lstContact.slice();

    if (!sort.active || sort.direction === "") {
      this.lstContact = data;
    } else {
      this.lstContact = data.sort((a: any, b: any) => {
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
    this.onFilterd();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.onFilterd();
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

  onContextMenu(event: MouseEvent, item: Contact) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    if (this.contextMenu !== undefined && this.contextMenu.menu !== null) {
      this.contextMenu.menuData = { item: item };
      this.contextMenu.menu.focusFirstItem("mouse");
      this.contextMenu.openMenu();
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
export interface pageSelection {
  skip: number;
  limit: number;
}
