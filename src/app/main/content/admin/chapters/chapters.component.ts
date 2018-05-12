import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";

import "rxjs/add/operator/startWith";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/observable/fromEvent";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { fuseAnimations } from "@fuse/animations";
import { FuseUtils } from "@fuse/utils";
import { ChaptersService } from "./chapters.service";

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss'],
  animations   : fuseAnimations
})
export class ChaptersComponent implements OnInit {

  dataSource: any;
  displayedColumns = ["id", "name", "description"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("filter") filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private chaptersService: ChaptersService) { }

  ngOnInit() {
    this.dataSource = new FilesDataSource(
      this.chaptersService,
      this.paginator,
      this.sort
    );
    Observable.fromEvent(this.filter.nativeElement, "keyup")
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

}

export class FilesDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject("");
  _filteredDataChange = new BehaviorSubject("");

  get filteredData(): any {
    return this._filteredDataChange.value;
  }

  set filteredData(value: any) {
    this._filteredDataChange.next(value);
  }

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  constructor(
    private chaptersService: ChaptersService,
    private _paginator: MatPaginator,
    private _sort: MatSort
  ) {
    super();
    this.filteredData = this.chaptersService.chapters;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.chaptersService.onChaptersChanged,
      this._paginator.page,
      this._filterChange,
      this._sort.sortChange
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      let data = this.chaptersService.chapters.slice();

      data = this.filterData(data);

      this.filteredData = [...data];

      data = this.sortData(data);

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  filterData(data) {
    if (!this.filter) {
      return data;
    }
    return FuseUtils.filterArrayByString(data, this.filter);
  }

  sortData(data): any[] {
    if (!this._sort.active || this._sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = "";
      let propertyB: number | string = "";

      switch (this._sort.active) {
        case "Id":
          [propertyA, propertyB] = [a.id, b.id];
          break;
        // case 'reference':
        //     [propertyA, propertyB] = [a.reference, b.reference];
        //     break;
        // case 'customer':
        //     [propertyA, propertyB] = [a.customer.firstName, b.customer.firstName];
        //     break;
        // case 'total':
        //     [propertyA, propertyB] = [a.total, b.total];
        //     break;
        // case 'payment':
        //     [propertyA, propertyB] = [a.payment.method, b.payment.method];
        //     break;
        // case 'status':
        //     [propertyA, propertyB] = [a.status[0].name, b.status[0].name];
        //     break;
        // case 'date':
        //     [propertyA, propertyB] = [a.date, b.date];
        //     break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1)
      );
    });
  }

  disconnect() {}
}

