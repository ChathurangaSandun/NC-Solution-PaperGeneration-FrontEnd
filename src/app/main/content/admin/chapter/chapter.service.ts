import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { environment } from "../../../../../environments/environment";

@Injectable()
export class ChapterService {

  routeParams: any;
  chapter: any;
  onChapterChanged: BehaviorSubject<any> = new BehaviorSubject({});
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([this.getChapter()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getChapter(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.routeParams.id === "new") {
        this.onChapterChanged.next(false);
        resolve(false);
      } else {
        this.http
          .get(this.baseUrl + 'api/chapters/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.chapter = response;
            this.onChapterChanged.next(this.chapter);
            resolve(response);
          }, reject);
      }
    });
  }

  saveChapter(chapter) {
    return new Promise((resolve, reject) => {
      this.http
        .put(this.baseUrl + "api/chapters", chapter)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  addChapter(chapter) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'api/chapters', chapter)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
