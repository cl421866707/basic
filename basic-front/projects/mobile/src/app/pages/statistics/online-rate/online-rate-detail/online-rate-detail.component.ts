import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-online-rate-detail',
  templateUrl: './online-rate-detail.component.html',
  styleUrls: ['./online-rate-detail.component.scss']
})
export class OnlineRateDetailComponent implements OnInit {

  @Input() detail: any

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismissView():void{
    this.modalCtrl.dismiss();
  }

}
