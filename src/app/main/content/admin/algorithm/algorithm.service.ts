import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlgorithmService {

  routeParams: any;
  algorithm: any;
  onAlgorithmChanged: BehaviorSubject<any> = new BehaviorSubject({});
  
  constructor(
    private http: HttpClient
  ){ }
  
  /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getAlgorithm()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getAlgorithm(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onAlgorithmChanged.next(false);
                resolve(false);
            }
            else
            {
                debugger
                this.http.get('http://localhost:59383/api/algorithms/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.algorithm = response;
                        debugger
                        this.onAlgorithmChanged.next(this.algorithm);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveAlgorithm(algorithm)
    {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:59383/api/algorithms/' + algorithm.Id, algorithm)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addAlgorithm(algorithm)
    {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:59383/api/algorithms', algorithm)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
