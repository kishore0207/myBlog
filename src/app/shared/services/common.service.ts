import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
      headers.append('Authorization', 'Basic ' + btoa('username:password'));
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
     getData(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {headers: headers}).map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
      }

      postData(url, data) {
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post(url, 'name=test2&email=test6%40gmail.com&password=123', {headers: headers}).map((res:Response) => res.json());
       // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }

}
