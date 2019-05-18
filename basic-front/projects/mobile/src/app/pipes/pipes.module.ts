import {NgModule} from '@angular/core';
import {ErrorMessagePipe} from './error-message';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [
        ErrorMessagePipe,
    ],
    imports: [IonicModule],
    exports: [
        ErrorMessagePipe,
    ]
})
export class PipesModule {
}
