import {Component, Inject, Input, OnInit} from '@angular/core';
import {Operator, PaginationComponent} from 'autumn-core';
import {LampMonitorInfo} from '@lib';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-app-lamp-info',
    templateUrl: './app-lamp-info.component.html',
    styleUrls: ['./app-lamp-info.component.scss']
})
export class AppLampInfoComponent extends PaginationComponent<LampMonitorInfo> implements OnInit {

    defaultHref = 'tabs/monitor';

    locale = {
        prevText: '上一页',
        nextText: '下一页'
    };

    popup = {
        state: false,
        lampMonitorInfo: null,
        id: 0
    };

    @Input() regionId = null;
    @Input() roadId = null;
    @Input() concentId = null;

    constructor(public http: HttpClient, private navParams: NavParams, private fb: FormBuilder,@Inject('apiUrl') public apiUrl,
                public modalController: ModalController) {
        super(http, apiUrl + 'monitor/pageLampMonitorInfo');
    }

    ngOnInit() {
        if (this.regionId || this.roadId || this.concentId) {
            /*
        初始化表单
         */
            this.pagination.queryForm = this.fb.group({
                // 所属区域
                regionId: [this.regionId],
                // 所属道路
                roadId: [this.roadId],
                // 所属配电柜
                concentId: [this.concentId],
                // 灯杆编号
                poleCode: [''],
                // 物联卡号
                simcard: [''],
            });
            this.pagination.declareFilters = [
                {control: 'regionId', field: 'pole.region.regionId', operator: Operator.eq},
                {control: 'roadId', field: 'pole.road.roadId', operator: Operator.eq},
                {control: 'concentId', field: 'pole.concent.concentId', operator: Operator.eq},
                {control: 'poleCode', field: 'pole.poleCode', operator: Operator.like},
                {control: 'simcard', field: 'simcard', operator: Operator.like},
            ];
            this.pagination.reload();
        }
    }

    openAdjust(data: LampMonitorInfo) {
        console.log(data);
        this.popup.state = !this.popup.state;
        this.popup.id = data.lampId;
    }

    close() {
        this.modalController.dismiss();
    }
}
