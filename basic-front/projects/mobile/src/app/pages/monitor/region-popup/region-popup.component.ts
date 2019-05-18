import {Component, Input, OnInit} from '@angular/core';
import {Region, RegionService} from '@lib';
import {BasePopupComponent} from '../BasePopupComponent';
import {ModalController} from '@ionic/angular';
import {AppLampInfoComponent} from '../app-lamp-info/app-lamp-info.component';
import {AppPoleInfoComponent} from '../app-pole-info/app-pole-info.component';
import {AppStatisticsInfoComponent} from '../app-statistics-info/app-statistics-info.component';

@Component({
    selector: 'app-region-popup',
    templateUrl: './region-popup.component.html',
    styleUrls: ['./region-popup.component.scss'],
})
export class RegionPopupComponent extends BasePopupComponent implements OnInit {

    region: Region;

    // 区域图标的大小
    thumbStyle = {
        width: '15px',
        height: '15px'
    };

    constructor(private regionService: RegionService, public modalController: ModalController) {
        super();
    }

    ngOnInit() {
    }

    @Input()
    set regionId(id: number) {
        this.id = id;
        if (this.regionId > 0) {
            this.regionService.getRegionById(this.regionId).subscribe(data => {
                this.region = data;
            });
        }
    }

    get regionId(): number {
        return this.id;
    }

    async poleDetail() {
        const modal = await this.modalController.create({
            component: AppPoleInfoComponent,
            componentProps: {
                regionId: this.region.regionId,
            }
        });
        return await modal.present();
    }

    async currentControl() {
        const modal = await this.modalController.create({
            component: AppLampInfoComponent,
            componentProps: {
                regionId: this.region.regionId,
            }
        });
        return await modal.present();
    }

    async statistics() {
        const modal = await this.modalController.create({
            component: AppStatisticsInfoComponent,
            componentProps: {
                regionId: this.region.regionId,
            }
        });
        return await modal.present();
    }
}
