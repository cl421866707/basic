import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-alarm',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

    index = 0;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(item) {
        console.log('onChange', item);
    }

    onTabClick(item) {
        console.log('onTabClick', item);
    }
}
