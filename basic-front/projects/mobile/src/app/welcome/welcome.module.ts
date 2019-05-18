import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }






