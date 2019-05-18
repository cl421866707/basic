import {Component, Input, OnInit} from '@angular/core';
import {BasePopupComponent} from '../BasePopupComponent';
import {PoleService} from '@lib';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-app-lamp-adjust-luminance',
    templateUrl: './app-lamp-adjust-luminance.component.html',
    styleUrls: ['./app-lamp-adjust-luminance.component.scss']
})
export class AppLampAdjustLuminanceComponent extends BasePopupComponent implements OnInit {

    thumbStyle = {
        width: '32px',
        height: '32px'
    };

    rangeVlaue = 0;

    @Input()
    set lampId(id: number) {
        this.id = id;
        if (this.lampId > 0) {

        }
    }

    get lampId(): number {
        return this.id;
    }

    constructor(private poleService: PoleService, public alertController: AlertController) {
        super();
    }

    ngOnInit() {
    }

    adjustButton(value) {
        this.rangeVlaue = value;
    }

    async showConfirm() {
        const alert = await this.alertController.create({
            header: '调光',
            subHeader: '调光值：' + this.rangeVlaue,
            message: '确认调光吗？',
            buttons: ['取消', '确定']
        });

        await alert.present();
    }

    adjust() {
        // this.poleService.adjustLuminance(this.rangeVlaue, this.pole.poleCode, this.pole.lamps[this.selectedTabIndex].lampSeq)
        //     .subscribe(result => {
        //     });
    }
}
