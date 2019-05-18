import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TabsComponent} from './tabs';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: '',
                redirectTo: 'monitor',
                pathMatch: 'full'
            },
            {
                path: 'monitor',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/monitor/monitor.module#MonitorPageModule'
                    }
                ]
            },
            {
                path: 'event',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/event/event.module#EventModule'
                    }
                ]
            },
            {
                path: 'statistics',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'scanner',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/scanner/scanner.module#ScannerModule'
                    }
                ]
            }

        ]
    }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsComponent]
})
export class TabsModule {
}
