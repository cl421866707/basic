import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LayoutComponent} from './layout.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'monitor', pathMatch: 'full'}
        ]
    },
];

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule, NgZorroAntdModule, FontAwesomeModule,
        RouterModule.forChild(routes)
    ]
})
export class LayoutModule {
}


