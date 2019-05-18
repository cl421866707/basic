import {Component, Inject, Input, OnInit} from '@angular/core';
import {Operator, PaginationComponent} from 'autumn-core';
import {Pole} from '@lib';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-app-pole-info',
    templateUrl: './app-pole-info.component.html',
    styleUrls: ['./app-pole-info.component.scss']
})
export class AppPoleInfoComponent extends PaginationComponent<Pole> implements OnInit {

    locale = {
        prevText: '上一页',
        nextText: '下一页'
    };

    defaultHref = 'tabs/monitor';

    @Input() regionId = null;
    @Input() roadId = null;
    @Input() concentId = null;

    constructor(public http: HttpClient, private navParams: NavParams, private fb: FormBuilder,@Inject('apiUrl') public apiUrl,
                public modalController: ModalController) {
        super(http, apiUrl + 'pole/pagePole');
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
            // if (this.regionId) {
            //     this.pagination.addFilterEq('regionId', this.regionId);
            // } else if (this.roadId) {
            //     this.pagination.addFilterEq('roadId', this.roadId);
            // } else if (this.concentId) {
            //     this.pagination.addFilterEq('regionId', this.concentId);
            // }
            this.pagination.reload();
        }
    }


    detail(data: Pole) {
        console.log(data);
    }

    close() {
        this.modalController.dismiss();
    }

}
