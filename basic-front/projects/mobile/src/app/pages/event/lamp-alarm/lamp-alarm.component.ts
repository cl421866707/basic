import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {AlarmType, LampAlarm, OperateType} from '@lib';

@Component({
    selector: 'app-lamp-alarm',
    templateUrl: './lamp-alarm.component.html',
    styleUrls: ['./lamp-alarm.component.scss']
})
export class LampAlarmComponent extends PaginationComponent<LampAlarm> implements OnInit {

    AlarmType = AlarmType;
    OperateType = OperateType;

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/alarm/pageLampAlarm');
    }

    ngOnInit() {
        this.pagination.reload();
    }

    detail(data: LampAlarm) {
        console.log(data);
    }

}
