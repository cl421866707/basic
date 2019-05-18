import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpService} from 'autumn-core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginService extends HttpService {

    constructor(public http: HttpClient, @Inject('apiUrl') public apiUrl) {
        super(http, apiUrl);
    }

    login(account: string, password1: string): Observable<any> {
        const httpParams = new HttpParams().set('userName', account).set('password', password1);
        return this.postForm('auth/login', httpParams.toString());
    }

    logout(): Observable<any> {
        return this.get('auth/logout');
    }
}
