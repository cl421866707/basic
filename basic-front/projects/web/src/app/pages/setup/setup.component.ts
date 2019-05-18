import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {LoginService} from '@lib';
import {AuthService} from '../../common/AuthService';

// import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

    isLogining = false;

    username: string;
    password: string;
    rememberMe: boolean;
    // 两周内自动登陆
    cookieTime: number = 14 * 24 * 60 * 60 * 1000;

    constructor(private loginService: LoginService, private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        // this.logout();
    }

    logout() {
        this.loginService.logout().subscribe(
            response => {
            }
        );
    }

    completeSetup(): void {
        this.isLogining = true;
        this.loginService.login(this.username, this.password).subscribe(
            response => {
                const navigationExtras: NavigationExtras = {
                    state: {
                        user: response.loginUser
                    }
                };
                this.isLogining = false;
                this.router.navigate(['/main'], navigationExtras);
            },
            error => {
                console.log(error);
                this.isLogining = false;
            }
        );

    }
}
