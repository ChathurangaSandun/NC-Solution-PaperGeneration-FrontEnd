import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnDestroy
} from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,  
} from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";

import "rxjs/add/operator/startWith";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/observable/fromEvent";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";

import { fuseAnimations } from "@fuse/animations";
import { FuseUtils } from "@fuse/utils";
import { Algorithm } from "./algorithm.model";
import { AlgorithmService } from "./algorithm.service";

@Component({
  selector: "app-algorithm",
  templateUrl: "./algorithm.component.html",
  styleUrls: ["./algorithm.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AlgorithmComponent implements OnInit, OnDestroy {
  algorihtm = new Algorithm();
  onAlgorithmChanged: Subscription;
  pageType: string;
  algorithmForm: FormGroup;

  constructor(
    private algorithmService: AlgorithmService,
    private formBuilder: FormBuilder,    
    private location: Location
  ) {}

  ngOnInit() {
    this.onAlgorithmChanged = this.algorithmService.onAlgorithmChanged.subscribe(
      algorihtm => {
        if (algorihtm) {          
          this.algorihtm = new Algorithm(algorihtm);
          this.pageType = "edit";
        } else {          
          this.pageType = "new";
          this.algorihtm = new Algorithm();
        }

        this.algorithmForm = this.createAlgorithmForm();
      }
    );
  }

  ngOnDestroy() {
    this.onAlgorithmChanged.unsubscribe();
  }

  createAlgorithmForm() {
    return this.formBuilder.group({
      Id: [this.algorihtm.Id],
      Name: [this.algorihtm.Name],
      Description: [this.algorihtm.Description]
    });
  }

  saveAlgorithm() {    
    const data = this.algorithmForm.getRawValue();    
    this.algorithmService.saveAlgorithm(data).then(() => {
      // Trigger the subscription with new data
      this.algorithmService.onAlgorithmChanged.next(data);
      console.log('saved !');

      // Show the success message
      // this.snackBar.open("Product saved", "OK", {
      //   verticalPosition: "top",
      //   duration: 2000
      // });
    });
  }

  addAlgorithm() {    
    const data = this.algorithmForm.getRawValue();    
    this.algorithmService.addAlgorithm(data).then(() => {
      // Trigger the subscription with new data
      this.algorithmService.onAlgorithmChanged.next(data);
      console.log('created !');
      // Show the success message
      // this.snackBar.open("Algorithm added", "OK", {
      //   verticalPosition: "top",
      //   duration: 2000
      // });

      // Change the location with new one
      this.location.go("admin/algorithm" + this.algorihtm.Id);
    });
  }
}

