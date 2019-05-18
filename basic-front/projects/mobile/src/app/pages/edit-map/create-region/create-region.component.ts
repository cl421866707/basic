import {Component, OnInit} from '@angular/core';
import {FormComponent} from 'autumn-core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-create-region',
    templateUrl: './create-region.component.html',
    styleUrls: ['./create-region.component.scss'],
})
export class CreateRegionComponent extends FormComponent implements OnInit {

    constructor(public fb: FormBuilder, private modalController: ModalController) {
        super(fb);
    }

    ngOnInit() {
        this.formGroup = this.fb.group({
            regionName: [null, Validators.compose([Validators.required,
                Validators.pattern(/\S/), Validators.minLength(2), Validators.maxLength(32)])],
        });
    }

    onValidSuccess(formValue: any): any {
    }

    cancel() {
        this.modalController.dismiss();
    }


}
