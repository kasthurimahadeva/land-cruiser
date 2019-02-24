import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConstantServiceService {

  authenticated =false;
  constructor(private http: HttpClient) { }

  authenticate(credentials, callback): any {
    const headers = new HttpHeaders(
        credentials
            ? {
              authorization:
                  'Basic ' + btoa(credentials.username + ':' + credentials.password)
            }
            : {}
    );

    this.http.get<any>('https://api.devrant.thusitha.site/v1/user.activate', { headers: headers }).subscribe(
        response => {
          if (response['name']) {
            this.authenticated = true;
            localStorage.setItem('principal', JSON.stringify(response));
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem(
                'currentUser',
                btoa(credentials.username + ':' + credentials.password)
            );
          } else {
            localStorage.setItem('authenticated', 'false');
            this.authenticated = false;
          }
          return callback && callback();
        },
        error => {
          console.error(error);
        }
    );
  }

  getLoggedInUserName(): string {
    const principal: any = localStorage.getItem('principal');
    if (principal !== null) {
      return JSON.parse(principal).name;
    } else {
      // this.router.navigate(['login']);
      return null;
    }
  }


}
