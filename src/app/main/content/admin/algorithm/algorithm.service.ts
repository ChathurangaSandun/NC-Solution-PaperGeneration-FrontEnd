import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlgorithmService {

  routeParams: any;
  algorithm: any;
  onProductChanged: BehaviorSubject<any> = new BehaviorSubject({});
  
  constructor(
    private http: HttpClient
  ){ }
  

}
