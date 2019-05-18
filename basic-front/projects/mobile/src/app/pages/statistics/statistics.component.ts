import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {

  index = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onChange(item) {
    // console.log('onChange', item);
  }

  onTabClick(item) {
    // console.log('onTabClick', item);
  }

}
