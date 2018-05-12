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
  //MatSnackBar,  
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
import { Chapter } from "./chapter.model";
import { ChapterService } from "./chapter.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ChapterComponent implements OnInit {
  chapter = new Chapter();
  onChapterChanged: Subscription;
  pageType: string;
  chapterForm: FormGroup;

  constructor(
    private chapterService: ChapterService,
    private formBuilder: FormBuilder,    
    private location: Location,
    //public snackBar: MatSnackBar,
  ) {
    
   }

  ngOnInit() {
    this.onChapterChanged = this.chapterService.onChapterChanged.subscribe(
      chapter => {
        if (chapter) {                  
          this.chapter = new Chapter(chapter);
          this.pageType = "edit";
        } else {          
          this.pageType = "new";
          this.chapter = new Chapter();
        }

        this.chapterForm = this.createChaptermForm();
      }
    );
  }

  ngOnDestroy() {
    this.onChapterChanged.unsubscribe();
  }

  createChaptermForm() {
    return this.formBuilder.group({
      Id: [this.chapter.Id],
      Name: [this.chapter.Name],
      Description: [this.chapter.Description]
    });
  }

  addChapter() {    
    const data = this.chapterForm.getRawValue();    
    this.chapterService.saveChapter(data).then(() => {
      // Trigger the subscription with new data
      this.chapterService.onChapterChanged.next(data);
      console.log('created !');

      // Show the success message
      // this.snackBar.open("Product saved", "OK", {
      //   verticalPosition: "top",
      //   duration: 2000
      // });
    });
  }

  saveChapter() {    
    const data = this.chapterForm.getRawValue();    
    this.chapterService.saveChapter(data).then(() => {
      // Trigger the subscription with new data
      this.chapterService.onChapterChanged.next(data);
      console.log('saved !');
      // Show the success message
      // this.snackBar.open("Algorithm added", "OK", {
      //   verticalPosition: "top",
      //   duration: 2000
      // });

      // Change the location with new one
      this.location.go("admin/chapter" + this.chapter.Id);
    });
  }

}
