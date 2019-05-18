import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {ActionType, LampAction} from '@lib';

@Component({
    selector: 'app-lamp-action',
    templateUrl: './lamp-action.component.html',
    styleUrls: ['./lamp-action.component.scss']
})
export class LampActionComponent extends PaginationComponent<LampAction> implements OnInit {

    ActionType = ActionType;

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/action/pageLampAction');
    }

    ngOnInit() {
        this.pagination.reload();
    }

    detail(data: LampAction) {
        console.log(data);
    }
}
