import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MonitorComponent} from './monitor.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {ConcentPopupComponent} from './concent-popup/concent-popup.component';
import {PolePopupComponent} from './pole-popup/pole-popup.component';
import {RegionPopupComponent} from './region-popup/region-popup.component';
import {RoadPopupComponent} from './road-popup/road-popup.component';
import {SearchbarPopupComponent} from './searchbar-popup/searchbar-popup.component';
import {AppPoleInfoComponent} from './app-pole-info/app-pole-info.component';
import {AppConcentInfoComponent} from './app-concent-info/app-concent-info.component';
import {AppLampInfoComponent} from './app-lamp-info/app-lamp-info.component';
import {AppLampAdjustLuminanceComponent} from './app-lamp-adjust-luminance/app-lamp-adjust-luminance.component';
import {AppStatisticsInfoComponent} from './app-statistics-info/app-statistics-info.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {LuminMonitorComponent} from './lumin-monitor/lumin-monitor.component';

const routes: Routes = [
    {
        path: '',
        component: MonitorComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgZorroAntdMobileModule,
        RouterModule.forChild(routes),
        NgxEchartsModule
    ],
    declarations: [MonitorComponent, ConcentPopupComponent, PolePopupComponent, RegionPopupComponent, RoadPopupComponent,
        SearchbarPopupComponent, AppPoleInfoComponent, AppConcentInfoComponent, AppLampInfoComponent, AppLampAdjustLuminanceComponent,
        AppStatisticsInfoComponent,
        LuminMonitorComponent],
    entryComponents: [AppPoleInfoComponent, AppConcentInfoComponent, AppLampInfoComponent, AppStatisticsInfoComponent]
})
export class MonitorPageModule {
}
