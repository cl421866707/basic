import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ReportService} from '@lib/src/services/report.service';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  optionData: any;
  selectedSearchType: string;
  selectedOptions: any;
  tableData: any;
  options: any;

  constructor(public http: HttpClient, private fb: FormBuilder, private reportService: ReportService) {
    this.selectedSearchType="Road";
    this.optionData = {Road: []};
  }

  ngOnInit() {
    this.reportService.getAllRoads().subscribe(result => {
      this.optionData = result;
      this.searchTypeChange();
    });
  }

  searchTypeChange(): void {
    this.selectedOptions = [];
    for (let i = 0; i < this.optionData[this.selectedSearchType].length; i++) {
      this.selectedOptions.push(this.optionData[this.selectedSearchType][i].key);
    }
    this.refreshData();
  }

  refreshData(): void {
    this.reportService.getLampLifeData(this.selectedOptions.join(',')).subscribe(result => {
      this.tableData = result;
      this.setOptions(result);
    });
  }

  setOptions(pieData) {
    let data = [];
    let nameArray = ['0~20%','20%~40%','40%~60%','60%~80%','80%~100%','>100%'];

    data.push({name: '0~20%',value: pieData[pieData.length-1].belowTwentyQty});
    data.push({name: '20%~40%',value: pieData[pieData.length-1].belowFortyQty});
    data.push({name: '40%~60%',value: pieData[pieData.length-1].belowSixtyQty});
    data.push({name: '60%~80%',value: pieData[pieData.length-1].belowEightyQty});
    data.push({name: '80%~100%',value: pieData[pieData.length-1].belowHundredQty});
    data.push({name: '>100%',value: pieData[pieData.length-1].overHundredQty});
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        data: nameArray
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

}
