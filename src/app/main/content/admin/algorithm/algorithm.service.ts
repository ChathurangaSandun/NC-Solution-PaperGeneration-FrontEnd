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
export class AlgorithmService {
  routeParams: any;
  algorithm: any;
  onAlgorithmChanged: BehaviorSubject<any> = new BehaviorSubject({});
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
      Promise.all([this.getAlgorithm()]).then(() => {
        resolve();
      }, reject);
    });
  }

  getAlgorithm(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.routeParams.id === "new") {
        this.onAlgorithmChanged.next(false);
        resolve(false);
      } else {
        this.http
          .get(this.baseUrl + "api/algorithms/" + this.routeParams.id)
          .subscribe((response: any) => {
            this.algorithm = response;
            this.onAlgorithmChanged.next(this.algorithm);
            resolve(response);
          }, reject);
      }
    });
  }

  saveAlgorithm(algorithm) {
    return new Promise((resolve, reject) => {
      this.http
        .put(this.baseUrl + "api/algorithms", algorithm)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  addAlgorithm(algorithm) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + "api/algorithms", algorithm)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
