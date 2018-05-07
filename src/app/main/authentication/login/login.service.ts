import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class LoginService {
  routeParams: any;
  onLoginUserChanged: BehaviorSubject<any> = new BehaviorSubject({});
  baseUrl = "http://localhost:59383/";
  //baseUrl = "https://ncspapergeneration.azurewebsites.net/"

  constructor(private http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    // return new Promise((resolve, reject) => {
    //   Promise.all([this.getAlgorithm()]).then(() => {
    //     resolve();
    //   }, reject);
    // });
  }

  loginUser(user) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + "api/User/Login", user)
        .subscribe((response: any) => {
          resolve(response);
        }, err => {
          console.log("Server Error occured");});
    });
  }

}
