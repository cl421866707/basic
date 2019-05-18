import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EditMapComponent} from './edit-map.component';
import {CreateRegionComponent} from './create-region/create-region.component';
import {CreateRoadComponent} from './create-road/create-road.component';
import {CreatePoleComponent} from './create-pole/create-pole.component';
import {CreateConcentComponent} from './create-concent/create-concent.component';
import {EditRegionComponent} from './edit-region/edit-region.component';
import {EditRoadComponent} from './edit-road/edit-road.component';
import {EditPoleComponent} from './edit-pole/edit-pole.component';
import {EditConcentComponent} from './edit-concent/edit-concent.component';
import {PipesModule} from '../../pipes/pipes.module';

const routes: Routes = [
    {
        path: '',
        component: EditMapComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        IonicModule, PipesModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [CreateRegionComponent, CreateRoadComponent, CreatePoleComponent, CreateConcentComponent, EditRegionComponent,
        EditRoadComponent, EditPoleComponent, EditConcentComponent],
    declarations: [EditMapComponent, CreateRegionComponent, CreateRoadComponent, CreatePoleComponent, CreateConcentComponent, EditRegionComponent,
        EditRoadComponent, EditPoleComponent, EditConcentComponent]
})
export class EditMapModule {
}
