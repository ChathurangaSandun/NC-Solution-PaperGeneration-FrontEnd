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
  selector: "app-algorithm",
  templateUrl: "./algorithm.component.html",
  styleUrls: ["./algorithm.component.scss"]
})
export class AlgorithmComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}