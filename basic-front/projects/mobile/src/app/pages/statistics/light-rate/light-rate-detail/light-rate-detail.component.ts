import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-light-rate-detail',
  templateUrl: './light-rate-detail.component.html',
  styleUrls: ['./light-rate-detail.component.scss']
})
export class LightRateDetailComponent implements OnInit {

  @Input() detail: any

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismissView():void{
    this.modalCtrl.dismiss();
  }

}
