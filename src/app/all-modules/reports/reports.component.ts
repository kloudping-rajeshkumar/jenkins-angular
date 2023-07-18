import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from "src/app/shared/data/data.service";
import { routes } from "src/app/shared/core.index";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {
  public routes = routes;
  public reports: Array<any> = [];
  public reportPreview: any=[]
  dataSource!: MatTableDataSource<any>;

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

 
  constructor(private data: DataService ) {
    this.reportPreview = this.data.reportPreview
   }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(): void {
    this.reports = [];
    this.serialNumberArray = [];

    this.data.getReports().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.reports.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.reports);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.reports = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.reports.slice();

    if (!sort.active || sort.direction === '') {
      this.reports = data;
    } else {
      this.reports = data.sort((a, b) => {
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
  sortedData = this.reportPreview.slice();

  sortDatas(sort: Sort) {
    const data = this.reportPreview.slice();

    if (!sort.active || sort.direction === '') {
      this.reportPreview = data;
    } else {
      this.reportPreview = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
}
