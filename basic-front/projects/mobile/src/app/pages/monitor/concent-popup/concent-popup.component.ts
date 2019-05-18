import {Component, Input, OnInit} from '@angular/core';
import {BasePopupComponent} from '../BasePopupComponent';
import {Concent, ConcentService} from '@lib';
import {ModalController} from '@ionic/angular';
import {AppPoleInfoComponent} from '../app-pole-info/app-pole-info.component';
import {AppLampInfoComponent} from '../app-lamp-info/app-lamp-info.component';
import {AppStatisticsInfoComponent} from '../app-statistics-info/app-statistics-info.component';

@Component({
    selector: 'app-concent-popup',
    templateUrl: './concent-popup.component.html',
    styleUrls: ['./concent-popup.component.scss'],
})
export class ConcentPopupComponent extends BasePopupComponent implements OnInit {

    concent: Concent;
    // 配电柜图标的大小
    thumbStyle = {
        width: '13px',
        height: '13px'
    };

    constructor(private concentService: ConcentService, public modalController: ModalController) {
        super();
    }

    ngOnInit() {
    }


    @Input()
    set concentId(id: number) {
        this.id = id;
        if (this.concentId > 0) {
            this.concentService.getConcentById(this.concentId).subscribe(data => {
                this.concent = data;
            });
        }
    }

    get concentId(): number {
        return this.id;
    }

    async poleDetail() {
        const modal = await this.modalController.create({
            component: AppPoleInfoComponent,
            componentProps: {
                concentId: this.concent.concentId,
            }
        });
        return await modal.present();
    }

    async currentControl() {
        const modal = await this.modalController.create({
            component: AppLampInfoComponent,
            componentProps: {
                concentId: this.concent.concentId,
            }
        });
        return await modal.present();
    }

    async statistics() {
        const modal = await this.modalController.create({
            component: AppStatisticsInfoComponent,
            componentProps: {
                concentId: this.concent.concentId,
            }
        });
        return await modal.present();
    }

}
