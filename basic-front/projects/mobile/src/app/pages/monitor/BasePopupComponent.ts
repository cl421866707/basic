import {EventEmitter, Output} from '@angular/core';

export class BasePopupComponent {

    id: number;

    @Output() changeState: EventEmitter<boolean> = new EventEmitter<boolean>();

    closePopup() {
        this.changeState.emit(false);
    }
}
