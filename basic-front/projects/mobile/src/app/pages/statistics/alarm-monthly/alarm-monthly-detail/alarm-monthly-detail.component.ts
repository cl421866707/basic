import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-alarm-monthly-detail',
  templateUrl: './alarm-monthly-detail.component.html',
  styleUrls: ['./alarm-monthly-detail.component.scss']
})
export class AlarmMonthlyDetailComponent implements OnInit {

  @Input() detail: any

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismissView():void{
    this.modalCtrl.dismiss();
  }

}
