import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {PaginationComponent} from 'autumn-core';
import {LampMotion, MotionType, OperateType} from '@lib';

@Component({
    selector: 'app-lamp-motion',
    templateUrl: './lamp-motion.component.html',
    styleUrls: ['./lamp-motion.component.scss']
})
export class LampMotionComponent extends PaginationComponent<LampMotion> implements OnInit {

    MotionType = MotionType;
    OperateType = OperateType;

    constructor(public http: HttpClient,
                private fb: FormBuilder, @Inject('apiUrl') private apiUrl: string) {
        super(http, apiUrl + 'event/motion/pageLampMotion');
    }

    ngOnInit() {
        this.pagination.reload();
    }

    detail(data: LampMotion) {
        console.log(data);
    }

}
