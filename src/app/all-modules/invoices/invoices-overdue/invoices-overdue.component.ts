import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from "src/app/shared/data/data.service";
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-invoices-overdue',
  templateUrl: './invoices-overdue.component.html',
  styleUrls: ['./invoices-overdue.component.scss']
})
export class InvoicesOverdueComponent implements OnInit {
  public routes = routes;
  public invoicesOverdue: Array<any> = [];
  dataSource!: MatTableDataSource<any>;

  public showFilter: boolean = false;
  public searchDataValue = '';
  select_box_open: any = [];

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

 
  constructor(private data: DataService ) { }

  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.invoicesOverdue = [];
    this.serialNumberArray = [];

    this.data.getInvoicesOverdue().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.invoicesOverdue.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.invoicesOverdue);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.invoicesOverdue = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.invoicesOverdue.slice();

    if (!sort.active || sort.direction === '') {
      this.invoicesOverdue = data;
    } else {
      this.invoicesOverdue = data.sort((a, b) => {
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
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
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
    this.getTableData();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
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
  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
}
