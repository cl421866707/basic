import {Component, Input, OnInit} from '@angular/core';
import {BasePopupComponent} from '../BasePopupComponent';
import {Road, RoadGrade, RoadService} from '@lib';
import {ModalController} from '@ionic/angular';
import {AppPoleInfoComponent} from '../app-pole-info/app-pole-info.component';
import {AppConcentInfoComponent} from '../app-concent-info/app-concent-info.component';
import {AppLampInfoComponent} from '../app-lamp-info/app-lamp-info.component';
import {AppStatisticsInfoComponent} from '../app-statistics-info/app-statistics-info.component';

@Component({
    selector: 'app-road-popup',
    templateUrl: './road-popup.component.html',
    styleUrls: ['./road-popup.component.scss'],
})
export class RoadPopupComponent extends BasePopupComponent implements OnInit {

    road: Road;
    // 道路图标的大小
    thumbStyle = {
        width: '15px',
        height: '15px'
    };

    RoadGrade = RoadGrade;

    constructor(private roadService: RoadService, public modalController: ModalController) {
        super();
    }

    ngOnInit() {
    }

    @Input()
    set roadId(id: number) {
        this.id = id;
        if (this.roadId > 0) {
            this.roadService.getRoadById(this.roadId).subscribe(data => {
                this.road = data;
            });
        }
    }

    get roadId(): number {
        return this.id;
    }

    async poleDetail() {
        const modal = await this.modalController.create({
            component: AppPoleInfoComponent,
            componentProps: {
                roadId: this.road.roadId,
            }
        });
        return await modal.present();
    }

    async concentDetail() {
        const modal = await this.modalController.create({
            component: AppConcentInfoComponent,
            componentProps: {
                roadId: this.road.roadId,
            }
        });
        return await modal.present();
    }

    async currentControl() {
        const modal = await this.modalController.create({
            component: AppLampInfoComponent,
            componentProps: {
                roadId: this.road.roadId,
            }
        });
        return await modal.present();
    }

    async statistics() {
        const modal = await this.modalController.create({
            component: AppStatisticsInfoComponent,
            componentProps: {
                roadId: this.road.roadId,
            }
        });
        return await modal.present();
    }
}
