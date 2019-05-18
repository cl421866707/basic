import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LampDetailComponent} from './lamp-detail/lamp-detail.component';

@NgModule({
    declarations: [LampDetailComponent],
    entryComponents: [LampDetailComponent],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule {
}
