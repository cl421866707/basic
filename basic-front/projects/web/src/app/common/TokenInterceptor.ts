import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, mergeMap} from 'rxjs/internal/operators';
import {Observable, of, throwError} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';
import {AuthService} from './AuthService';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, public messageService: NzMessageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authService.getToken();
        if (authToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: AuthService.TOKEN_PREFIX + authToken
                }
            });
        }

        const authReq = req.clone({headers: req.headers.append('X-Requested-With', 'XMLHttpRequest')});

        return next.handle(authReq).pipe(mergeMap((event: any) => {
                // 正常返回，处理具体返回参数
                if (event instanceof HttpResponse && event.status === 200) {
                    const resToken = event.headers.get(AuthService.AUTHORIZATION);
                    if (resToken) {
                        this.authService.updateToken(resToken);
                    }
                }
                return of(event);
            }),
            catchError(this.handleError));
    }

    /**
     * 处理请求失败事件
     * @ param err
     */
    private handleError(error: HttpErrorResponse) {
        const status = error.status;
        const statusText = error.statusText;
        let msg = null;
        let type = 'error';
        if (status === 401) {
            type = 'warning';
            msg = '请退出后重新登录';
        } else if (status === 400) {
            msg = '请求失败，提交数据不合法';
        } else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        } else if (status === 500) {
            msg = '服务器出错，请稍后再试';
        } else if (status === 502) {
            msg = '服务器出错，请稍后再试';
        } else if (status === 0) {
            type = 'warning';
            msg = '无法连接到服务器，请检测您的网络';
        } else if (statusText) {
            msg = statusText;
        }
        if (msg && msg.length > 0) {
            // this.messageService.create(type, msg);
        }
        return throwError(error);
    }
}
