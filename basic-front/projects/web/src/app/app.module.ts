import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SetupModule} from './pages/setup/setup.module';
import {TokenInterceptor} from './common/TokenInterceptor';
import {environment} from '../environments/environment';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {LocalStorage} from 'autumn-core';

registerLocaleData(zh);

library.add(fas, far, fab);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        SetupModule
    ],
    providers: [
        {
            provide: 'apiUrl',
            useValue: getBaseLocation()
        },
        {provide: NZ_I18N, useValue: zh_CN},
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, LocalStorage],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function getBaseLocation() {
    return environment.apiUrl;
    // const basePath: string = (window.location.pathname.split('/')[1] || '');
    // console.log(basePath);
    // return '/' + basePath;
}
