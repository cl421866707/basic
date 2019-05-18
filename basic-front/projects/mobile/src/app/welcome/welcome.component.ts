import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goToLogin() {
        this.navCtrl.navigateRoot('/login');
    }

}
