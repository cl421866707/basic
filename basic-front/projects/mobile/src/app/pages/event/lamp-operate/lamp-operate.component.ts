import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {LampOperate, OperateType} from '@lib';

@Component({
    selector: 'app-lamp-operate',
    templateUrl: './lamp-operate.component.html',
    styleUrls: ['./lamp-operate.component.scss']
})
export class LampOperateComponent extends PaginationComponent<LampOperate> implements OnInit {

    OperateType = OperateType;

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/operate/pageLampOperate');
    }

    ngOnInit() {

        this.pagination.reload();
    }

    detail(data: LampOperate) {
        console.log(data);
    }

}
