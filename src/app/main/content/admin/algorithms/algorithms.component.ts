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

@Component({
  selector: "app-algorithms",
  templateUrl: "./algorithms.component.html",
  styleUrls: ["./algorithms.component.scss"]
})
export class AlgorithmsComponent implements OnInit {
  // displayedColumns = ['id', 'name', 'description'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns = ["id", "name", "description"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("filter") filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {}
}
// export interface Algorithm {
//   id: number;
//   name: string;
//   description: string;
// }

// const ELEMENT_DATA: Algorithm[] = [
//   {id: 1, name: 'aaaaa', description: 'aaa'},
//   {id: 2, name: 'bbbbb', description: 'bbb'},
//   {id: 3, name: 'ccccc', description: 'ccc'},

// ];

export interface Element {
  name: string;
  id: number;
  description: string;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, name: "Hydrogen", description: "H" },
  { id: 2, name: "Helium", description: "He" },
  { id: 3, name: "Lithium", description: "Li" },
  { id: 4, name: "Beryllium", description: "Be" },
  { id: 5, name: "Boron", description: "B" },
  { id: 6, name: "Carbon", description: "C" }
];
