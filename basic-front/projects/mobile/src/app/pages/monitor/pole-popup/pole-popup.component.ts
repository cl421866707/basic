import {Component, Input, OnInit} from '@angular/core';
import {BasePopupComponent} from '../BasePopupComponent';
import {LampProfile, LampService, Pole, PoleService} from '@lib';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-pole-popup',
    templateUrl: './pole-popup.component.html',
    styleUrls: ['./pole-popup.component.scss']
})
export class PolePopupComponent extends BasePopupComponent implements OnInit {

    activeKey = ['0', '1'];

    // 灯杆图标的大小
    thumbStyle = {
        width: '13px',
        height: '13px'
    };

    /*
    灯具Id
    */
    lampId;
    /*
    灯杆对象
     */
    pole: Pole;
    /*
    灯具信息数组
     */
    lampProfiles: LampProfile[];

    index = 0;
    selectedTabIndex = 0;

    rangeVlaue = 0;

    constructor(private poleService: PoleService, public alertController: AlertController, private lampService: LampService) {
        super();
    }

    ngOnInit() {
    }

    @Input()
    set poleId(id: number) {
        this.id = id;
        if (this.poleId > 0) {
            this.poleService.getEditPoleInfo(this.poleId).subscribe(data => {
                this.pole = data;
            });
            this.lampService.getLampProfilesByPoleId(this.poleId).subscribe(data => {
                this.lampProfiles = data;
                /*
                初始化默认选中的灯具ID：undefined=>number
                 */
                this.lampId = this.lampProfiles[this.selectedTabIndex].lampView.lampId;
            });
        }
    }

    get poleId(): number {
        return this.id;
    }

    onChangeLamp($event) {
        this.selectedTabIndex = $event.index;
    }

    onTabClick($event) {
    }

    adjustButton(value) {
        this.rangeVlaue = value;
    }

    adjust() {
        this.poleService.adjustLuminance(this.rangeVlaue, this.pole.poleCode, this.pole.lamps[this.selectedTabIndex].lampSeq)
            .subscribe(result => {
            });
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


}
