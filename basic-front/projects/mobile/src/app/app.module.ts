import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LibModule} from '@lib';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {RouteReuseStrategy} from '@angular/router';
import {environment} from '../environments/environment';
import {ItemViewComponent} from './components/item-view/item-view.component';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

@NgModule({
    declarations: [
        AppComponent, ItemViewComponent
    ],
    imports: [
        BrowserModule, LibModule, FormsModule,
        HttpClientModule, AppRoutingModule, BrowserAnimationsModule, NgZorroAntdMobileModule, FontAwesomeModule,
        IonicModule.forRoot({
            backButtonText: '',
            mode: 'ios',
            backButtonIcon: 'ios-arrow-back',
            scrollPadding: false, // 解决键盘弹出时底部空白的问题
            swipeBackEnabled: false // 禁用IOS左侧滑动返回效果
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: 'apiUrl',
            useValue: environment.apiUrl
        },
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
