import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EventComponent} from './event.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {LampActionComponent} from './lamp-action/lamp-action.component';
import {LampAlarmComponent} from './lamp-alarm/lamp-alarm.component';
import {LampMotionComponent} from './lamp-motion/lamp-motion.component';
import {LampNetworkComponent} from './lamp-network/lamp-network.component';
import {LampOperateComponent} from './lamp-operate/lamp-operate.component';
import {LampTelemetryComponent} from './lamp-telemetry/lamp-telemetry.component';

const routes: Routes = [
    {
        path: '',
        component: EventComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule, NgZorroAntdMobileModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EventComponent, LampActionComponent, LampAlarmComponent, LampMotionComponent, LampNetworkComponent,
        LampOperateComponent, LampTelemetryComponent]
})
export class EventModule {
}
