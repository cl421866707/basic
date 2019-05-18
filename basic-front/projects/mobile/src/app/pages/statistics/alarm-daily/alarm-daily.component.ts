import {AfterContentChecked, Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ReportService} from '@lib';

@Component({
    selector: 'app-alarm-daily',
    templateUrl: './alarm-daily.component.html',
    styleUrls: ['./alarm-daily.component.scss']
})
export class AlarmDailyComponent implements OnInit, AfterContentChecked {

    optionData: any;
    selectedSearchType: string;
    selectedOptions: any;
    searchDate: any;
    tableData: any;
    data1: any;
    data2: any;

    alarmOptions: any;
    faultOptions: any;

    constructor(public http: HttpClient, private fb: FormBuilder, private reportService: ReportService, private elementRef: ElementRef) {
        this.selectedSearchType = "Road";
        this.optionData = {Road: []};
    }

    ngOnInit() {
        this.searchDate = new Date(this.dateToString(new Date())).toISOString();
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
        this.reportService.getAlarmDailyData(this.searchDate, this.selectedOptions.join(',')).subscribe(result => {
            this.tableData = result;
        });
        this.reportService.getAlarmDailyChartData(this.searchDate, this.selectedOptions.join(',')).subscribe(result => {
            this.data1 = [];
            this.data2 = [];
            if (result) {
                for (let entry of result) {
                    this.data1.push({name: this.getAlarmTypeName(entry.alarmType), value: entry.value});
                    if (entry.fault) {
                        this.data2.push({name: this.getAlarmTypeName(entry.alarmType), value: entry.value});
                    }
                }
                this.alarmOptions = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '报警类型分布',
                            type: 'pie',
                            radius: '65%',
                            center: ['60%', '50%'],
                            data: this.data1,
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
                this.faultOptions = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '故障类型分布',
                            type: 'pie',
                            radius: '65%',
                            center: ['60%', '50%'],
                            data: this.data2,
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
        });
    }

    getAlarmTypeName(alarmType) {
        if (alarmType == 'DRIVE_FAULT') {
            return '驱动故障';
        }
        if (alarmType == 'LAMP_FAULT') {
            return '灯具故障';
        }
        if (alarmType == 'LINE_INTERRUPTION') {
            return '线路断电';
        }
        if (alarmType == 'OVERCURRENT') {
            return '过流';
        }
        if (alarmType == 'UNDERCURRENT') {
            return '欠流';
        }
        if (alarmType == 'OVERVOLTAGE') {
            return '过压';
        }
        if (alarmType == 'UNDERVOLTAGE') {
            return '欠压';
        }
        if (alarmType == 'OVERLOAD') {
            return '过载';
        }
        if (alarmType == 'UNDERLOAD') {
            return '欠载';
        }
        if (alarmType == 'TEMPERATURE_HIGH') {
            return '温度过高';
        }
        if (alarmType == 'TEMPERATURE_LOW') {
            return '温度过低';
        }
        return '';
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

    ngAfterContentChecked() {
        let height = this.elementRef.nativeElement.querySelector('.scroll-area ion-grid').offsetHeight;
        this.elementRef.nativeElement.querySelector('.scroll-area').style.height = height + 'px';
    }
}
