import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './pages/setup/setup.component';

const routes: Routes = [
    {path: '', redirectTo: '/setup', pathMatch: 'full'},
    {path: 'setup', component: SetupComponent},
    {path: 'main', loadChildren: './layout/layout.module#LayoutModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
