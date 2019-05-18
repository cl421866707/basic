import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-searchbar-popup',
    templateUrl: './searchbar-popup.component.html',
    styleUrls: ['./searchbar-popup.component.scss']
})
export class SearchbarPopupComponent implements OnInit {

    @Input() hideSearchbarPopup: any;

    constructor() {
    }

    ngOnInit() {

    }

    close() {
        this.hideSearchbarPopup();
    }


}
