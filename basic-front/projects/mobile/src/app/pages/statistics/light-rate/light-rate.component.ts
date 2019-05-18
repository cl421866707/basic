import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ReportService} from '@lib';
import {ModalController} from '@ionic/angular';
import {LightRateDetailComponent} from './light-rate-detail/light-rate-detail.component';

@Component({
    selector: 'app-light-rate',
    templateUrl: './light-rate.component.html',
    styleUrls: ['./light-rate.component.scss']
})
export class LightRateComponent implements OnInit {

    optionData: any;
    selectedSearchType: string;
    selectedOptions: any;
    searchDate: any;
    chartOptions: any;
    myHtml: any;
    data: any;

    constructor(public http: HttpClient, private fb: FormBuilder, private reportService: ReportService,private modalController: ModalController) {
        this.searchDate = new Date(this.dateToString(new Date())).toISOString();
        this.optionData = {Road: []};
        this.selectedSearchType = "Road";
    }

    async presentModal(detail: any) {
        const modal = await this.modalController.create({
            component: LightRateDetailComponent,
            componentProps: { detail: detail }
        });
        return await modal.present();
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
        this.reportService.getLightRateData(this.searchDate, this.selectedOptions.join(',')).subscribe(json => {
            this.data = json;
            this.loadChart(-1);//加载合计曲线
        });
    }

    loadChart(id): void {
        let data1 = [];
        let data2 = [];
        let dayOfMonth = [];
        let roadDayFaultVos = this.data;
        for (let i = 0; i < roadDayFaultVos.length; i++) {
            if (roadDayFaultVos[i].id == id) {
                for (let j = 0; j < roadDayFaultVos[i].roadDayFaultDetailVos.length; j++) {
                    data1.push(roadDayFaultVos[i].roadDayFaultDetailVos[j].faultTotal);
                    data2.push(roadDayFaultVos[i].roadDayFaultDetailVos[j].percent);
                    dayOfMonth.push(roadDayFaultVos[i].roadDayFaultDetailVos[j].dayOfMonth);
                }
            }
        }
        this.chartOptions = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data: ['故障数量', '亮灯率%']
            },
            xAxis: [
                {
                    type: 'category',
                    data: dayOfMonth,
                    axisPointer: {
                        type: 'shadow'
                    },
                    name: ''
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '数量',
                    position: 'left',
                    axisLabel: {
                        formatter: '{value} '
                    },
                    minInterval: 1,
                }, {
                    type: 'value',
                    name: '亮灯率%',
                    position: 'right',
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    minInterval: 1,
                }
            ],
            series: [{
                name: '故障数量',
                type: 'bar',
                data: data1,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {color: 'red'}
                }
            }, {
                name: '亮灯率%',
                type: 'line',
                data: data2,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {color: 'green'}
                }
            }
            ]
        };
    }

    dateToString(searchDate) {
        var date = new Date(searchDate);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        let day = (date.getDate()).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        let dateTime = year + "-" + month + "-" + day;
        return dateTime;
    }
}
