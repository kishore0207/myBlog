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

public encodeURIComponent(obj): string{
  let arr = [];
  console.log(obj.length);
    for (let i in obj) {
          arr.push(i + "=" + obj[i]);
      }
  console.log(arr.join('&'));
  return arr.join('&');
};


  createAuthorizationHeader(headers: Headers) {
      headers.append('Authorization', 'Basic ' + btoa('username:password'));
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
     login(url, data) {
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post(url, this.encodeURIComponent(data), {headers: headers}).map((res:Response) => res.json());
      }

      register(url, data) {
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post(url, this.encodeURIComponent(data), {headers: headers}).map((res:Response) => res.json());
      }

}
