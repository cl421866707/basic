import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {CommunicateState, LampNetwork} from '@lib';

@Component({
    selector: 'app-lamp-network',
    templateUrl: './lamp-network.component.html',
    styleUrls: ['./lamp-network.component.scss']
})
export class LampNetworkComponent extends PaginationComponent<LampNetwork> implements OnInit {

    CommunicateState = CommunicateState;

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/network/pageLampNetwork');
    }

    ngOnInit() {
        this.pagination.reload();
    }

    detail(data: LampNetwork) {
        console.log(data);
    }

}
