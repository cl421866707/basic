import {AfterContentChecked, Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ReportService} from '@lib';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit, AfterContentChecked {

  optionData: any;
  selectedSearchType: string;
  selectedOptions: any;
  tableData: any;

  poleOrderOptions: any;
  lampOrderOptions: any;
  poleTypeOptions: any;
  lapmIlluminationOptions: any;
  lampModelOptions: any;
  lampBrandOptions: any;

  constructor(public http: HttpClient, private fb: FormBuilder,private reportService: ReportService, private elementRef: ElementRef) {
    this.selectedSearchType = "Road";
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
    this.reportService.getAssetReportData(this.selectedOptions.join(',')).subscribe(result => {
      this.tableData = result.assetVos;

      let pieStatistics = result.pieStatistics;
      let poleTypeAssets = pieStatistics.poleTypeAssets;
      let luminCategoryAssets = pieStatistics.luminCategoryAssets;

      let modelAssets = pieStatistics.lightModelAssets;
      let brandAssets = pieStatistics.brandAssets;

      let poleAssetVos = result.poleAssetVos;
      let lampAssetVos = result.lampAssetVos;

      this.setPoleTypeOptions(poleTypeAssets);
      this.setLapmIlluminationOptions(luminCategoryAssets);
      this.setLampModelOptions(modelAssets);
      this.setLampBrandOptions(brandAssets);

      this.setPoleOrderOptions(poleAssetVos);
      this.setLampOrderOptions(lampAssetVos);
    });
  }

  setLampOrderOptions(pieData) {
    let category = [];
    let value = [];
    let percent = [];

    if (pieData != null) {
      pieData.forEach(function (v) {
        value.push(v.poleCount);
        category.push(v.assetName);
        percent.push(v.percent);
      });
    }
    value.reverse();
    category.reverse();
    percent.reverse();
    this.lampOrderOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '0',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: category
      },
      series: [
        {
          name: '数量排名',
          type: 'bar',
          data: value
        }
      ]
    };
  }

  setPoleOrderOptions(pieData) {
    let category = [];
    let value = [];
    let percent = [];

    if (pieData != null) {
      pieData.forEach(function (v) {
        value.push(v.poleCount);
        category.push(v.assetName);
        percent.push(v.percent);
      });
    }
    value.reverse();
    category.reverse();
    percent.reverse();
    this.poleOrderOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '0',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: category
      },
      series: [
        {
          name: '数量排名',
          type: 'bar',
          data: value
        }
      ]
    };
  }

  setLampBrandOptions(pieData) {
    let data = [];
    let nameArray = [];
    if (pieData != null && pieData.length != 0) {
      pieData.forEach(function (v) {
        data.push({
          name: v.name,
          value: v.count
        });
        nameArray.push(v.name);
      });
    }
    this.lampBrandOptions = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
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

  setLampModelOptions(pieData) {
    let data = [];
    let nameArray = [];
    if (pieData != null && pieData.length != 0) {
      pieData.forEach(function (v) {
        data.push({
          name: v.name,
          value: v.count
        });
        nameArray.push(v.name);
      });
    }
    this.lampModelOptions = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
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

  setLapmIlluminationOptions(pieData) {
    let data = [];
    let nameArray = [];
    if (pieData != null && pieData.length != 0) {
      pieData.forEach(function (v) {
        data.push({
          name: v.name,
          value: v.count
        });
        nameArray.push(v.name);
      });
    }
    this.lapmIlluminationOptions = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
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

  setPoleTypeOptions(pieData) {
    let data = [];
    let nameArray = [];
    if (pieData != null && pieData.length != 0) {
      pieData.forEach(function (v) {
        data.push({
          name: v.name,
          value: v.count
        });
        nameArray.push(v.name);
      });
    }
    this.poleTypeOptions = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
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

  ngAfterContentChecked() {
    let height = this.elementRef.nativeElement.querySelector('.scroll-area ion-grid').offsetHeight;
    this.elementRef.nativeElement.querySelector('.scroll-area').style.height = height + 'px';
  }

}
