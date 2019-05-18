import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {StatisticsComponent} from './statistics.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {AssetComponent} from './asset/asset.component';
import {AlarmDailyComponent} from './alarm-daily/alarm-daily.component';
import {AlarmMonthlyComponent} from './alarm-monthly/alarm-monthly.component';
import {OnlineRateComponent} from './online-rate/online-rate.component';
import {LightRateComponent} from './light-rate/light-rate.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {AlarmMonthlyDetailComponent} from './alarm-monthly/alarm-monthly-detail/alarm-monthly-detail.component';
import {LightRateDetailComponent} from './light-rate/light-rate-detail/light-rate-detail.component';
import {OnlineRateDetailComponent} from './online-rate/online-rate-detail/online-rate-detail.component';
import {LifeComponent} from './life/life.component';

const routes: Routes = [
    {
        path: '',
        component: StatisticsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule, NgZorroAntdMobileModule,
        RouterModule.forChild(routes), NgxEchartsModule
    ],
    declarations: [StatisticsComponent, AssetComponent, AlarmDailyComponent, AlarmMonthlyComponent, OnlineRateComponent, LightRateComponent, AlarmMonthlyDetailComponent, LightRateDetailComponent, OnlineRateDetailComponent, LifeComponent],
    entryComponents: [AlarmMonthlyDetailComponent, LightRateDetailComponent, OnlineRateDetailComponent]
})
export class StatisticsPageModule {
}
