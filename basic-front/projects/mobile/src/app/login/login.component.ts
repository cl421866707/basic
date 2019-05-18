import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, Events, LoadingController, MenuController, ModalController, NavController, ToastController} from '@ionic/angular';
import {LoginService} from '@lib';
import {LOGIN_EVENT} from '../Constants';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(public router: Router, public navCtrl: NavController, public events: Events,
                public menuCtrl: MenuController,
                private loginService: LoginService,
                public toastCtrl: ToastController,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController, private modalController: ModalController,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['administrator', Validators.compose([
                Validators.required
            ])],
            password: ['123456', Validators.compose([
                Validators.required
            ])]
        });
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }


    logIn() {
        this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
            response => {
                this.events.publish(LOGIN_EVENT);
                this.router.navigateByUrl('/tabs');
            }
        );

    }

    async forgotPass() {
        const alert = await this.alertCtrl.create({
            header: 'Forgot Password?',
            message: 'Enter you email address to send a reset link password.',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Confirm',
                    handler: async () => {
                        const loader = await this.loadingCtrl.create({
                            duration: 2000
                        });

                        loader.present();
                        loader.onWillDismiss().then(async l => {
                            const toast = await this.toastCtrl.create({
                                showCloseButton: true,
                                message: 'Email was sended successfully.',
                                duration: 3000,
                                position: 'bottom'
                            });

                            toast.present();
                        });
                    }
                }
            ]
        });

        await alert.present();
    }

    // // //
    goToRegister() {
        this.navCtrl.navigateRoot('/register');
    }

    goToHome() {
        this.navCtrl.navigateRoot('/tabs');
    }
}
