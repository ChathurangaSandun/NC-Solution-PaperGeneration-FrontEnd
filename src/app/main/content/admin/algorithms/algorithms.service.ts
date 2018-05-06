import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class AlgorithmsService implements Resolve<any> {
  algorithms: any[];
  onAlgorithmChanged: BehaviorSubject<any> = new BehaviorSubject({});

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
      Promise.all([this.getAlgorithms()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getAlgorithms(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get("http://localhost:59383/api/algorithms")
        .subscribe((response: any) => {
          this.algorithms = response;
          this.onAlgorithmChanged.next(this.algorithms);          
          resolve(response);
        }, reject);
    });
  }
}
