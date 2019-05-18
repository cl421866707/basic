import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    lang: any;
    enableNotifications: any;
    paymentMethod: any;
    currency: any;
    enablePromo: any;
    enableHistory: any;

    languages: any = ['English', 'Portuguese', 'French'];
    paymentMethods: any = ['Paypal', 'Credit Card'];
    currencies: any = ['USD', 'BRL', 'EUR'];

    constructor(public navCtrl: NavController, public router: Router) {
    }

    ngOnInit() {
    }

    editProfile() {
        this.navCtrl.navigateForward('edit-profile');
    }

    logout() {
        this.navCtrl.navigateRoot('/');
    }

    openMapEdit() {
        this.router.navigateByUrl("edit-map");
    }
}
