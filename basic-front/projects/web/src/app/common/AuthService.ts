import {Injectable} from '@angular/core';
import {LocalStorage} from 'autumn-core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    /**
     * TOKEN前缀
     */
    public static TOKEN_PREFIX = 'Bearer ';

    /**
     * TOKEN参数KEY
     */
    public static AUTHORIZATION = 'Authorization';

    /**
     * TOKEN存储KEY
     */
    private static TOKEN = 'token';

    private static token: string;

    constructor(private  localStorage: LocalStorage) {

    }

    /**
     * 更新TOKEN
     */
    updateToken(token) {
        AuthService.token = token;
        this.localStorage.set(AuthService.TOKEN, token);
    }

    isLogin(): boolean {
        return true;
    }

    /**
     * 获取TOKEN
     */
    getToken() {
        if (AuthService.token) {
            return AuthService.token;
        } else {
            AuthService.token = this.getStorageToken();
            return AuthService.token;
        }
    }

    /**
     * 获取TOKEN
     */
    getStorageToken() {
        return this.localStorage.get(AuthService.TOKEN);
    }

    /**
     * 删除TOKEN
     */
    removeToken() {
        AuthService.token = null;
        // this.storage.remove(AuthService.TOKEN);
    }
}
