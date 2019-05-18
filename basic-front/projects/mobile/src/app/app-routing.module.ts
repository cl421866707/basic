import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './welcome/welcome.module#WelcomeModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule'},
    {path: 'edit-map', loadChildren: './pages/edit-map/edit-map.module#EditMapModule'},
    // { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
    // { path: 'monitor', loadChildren: './pages/monitor/monitor.module#MonitorPageModule' },
    // { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
