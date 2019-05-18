import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {LampTelemetry, LampTelemetryState} from '@lib';

@Component({
    selector: 'app-lamp-telemetry',
    templateUrl: './lamp-telemetry.component.html',
    styleUrls: ['./lamp-telemetry.component.scss']
})
export class LampTelemetryComponent extends PaginationComponent<LampTelemetry> implements OnInit {

    LampTelemetryState = LampTelemetryState;
    lampTelemetryStateArray = Object.keys(LampTelemetryState).filter(key => isNaN(Number(key)));

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/telemetry/pageLampTelemetry');
    }

    ngOnInit() {

        this.pagination.reload();
    }

    detail(data: LampTelemetry) {
        console.log(data);
    }
}
