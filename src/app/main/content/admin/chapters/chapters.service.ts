import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { environment } from "../../../../../environments/environment";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class ChaptersService implements Resolve<any> {
  chapters: any[];
  onChaptersChanged: BehaviorSubject<any> = new BehaviorSubject({});
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
    return new Promise((resolve, reject) => {
      Promise.all([this.getChapters()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getChapters(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "api/chapters")
        .subscribe((response: any) => {
          this.chapters = response;
          this.onChaptersChanged.next(this.chapters);
          resolve(response);
        }, reject);
    });
  }
}
