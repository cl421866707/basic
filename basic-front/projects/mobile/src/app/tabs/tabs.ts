import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.html',
    styleUrls: ['tabs.scss']
})
export class TabsComponent {


    constructor(public menuCtrl: MenuController) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
}
