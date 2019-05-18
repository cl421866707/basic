import {Component, Inject, Input, OnInit} from '@angular/core';
import {Concent} from '@lib';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Operator, PaginationComponent} from 'autumn-core';

@Component({
    selector: 'app-app-concent-info',
    templateUrl: './app-concent-info.component.html',
    styleUrls: ['./app-concent-info.component.scss']
})
export class AppConcentInfoComponent extends PaginationComponent<Concent> implements OnInit {

    defaultHref = 'tabs/monitor';

    locale = {
        prevText: '上一页',
        nextText: '下一页'
    };

    @Input() regionId = null;
    @Input() roadId = null;
    @Input() concentId = null;

    constructor(public http: HttpClient, private navParams: NavParams, private fb: FormBuilder,@Inject('apiUrl') public apiUrl,
                public modalController: ModalController) {
        super(http, apiUrl + 'concent/pageConcent');
    }

    ngOnInit() {
        if (this.regionId || this.roadId || this.concentId) {
            this.pagination.queryForm = this.fb.group({
                // 所属区域
                regionId: [this.regionId],
                // 所属道路
                roadId: [this.roadId],
                // 所属配电柜
                concentId: [this.concentId],
            });
            this.pagination.declareFilters = [
                {control: 'regionId', field: 'region.regionId', operator: Operator.eq},
                {control: 'roadId', field: 'road.roadId', operator: Operator.eq},
                {control: 'concentId', field: 'concent.concentId', operator: Operator.eq}
            ];
            this.pagination.reload();
        }

    }

    detail(data: Concent) {
        console.log(data);
    }

    close() {
        this.modalController.dismiss();
    }

}
