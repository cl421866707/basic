import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ReportService} from '@lib';
import {ModalController} from '@ionic/angular';
import {AlarmMonthlyDetailComponent} from './alarm-monthly-detail/alarm-monthly-detail.component';

@Component({
    selector: 'app-alarm-monthly',
    templateUrl: './alarm-monthly.component.html',
    styleUrls: ['./alarm-monthly.component.scss']
})
export class AlarmMonthlyComponent implements OnInit {

    optionData: any;
    selectedSearchType: string;
    selectedOptions: any;
    searchDate: any;
    chartOptions: any;
    myHtml: any;
    data: any;

    constructor(public http: HttpClient, private fb: FormBuilder, private reportService: ReportService, private modalController: ModalController) {
        this.searchDate = new Date(this.dateToString(new Date())).toISOString();
        this.optionData = {Road: []};
        this.selectedSearchType = 'Road';
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

    async presentModal(detail: any) {
        const modal = await this.modalController.create({
            component: AlarmMonthlyDetailComponent,
            componentProps: { detail: detail }
        });
        return await modal.present();
    }

    refreshData(): void {
        this.reportService.getAlarmMonthlyData(this.searchDate, this.selectedOptions.join(',')).subscribe(json => {
            this.data = json;
            const roadDayAlarmFaultVos = json.roadDayAlarmFaultVos;
            const alarmTypeDayAlarmVos = json.alarmTypeDayAlarmVos;
            const dayOfMonth = new Array(roadDayAlarmFaultVos[0].dayAlarmFaultVos.length);
            for (let i=0;i<roadDayAlarmFaultVos[0].dayAlarmFaultVos.length;i++){
                dayOfMonth[i] = roadDayAlarmFaultVos[0].dayAlarmFaultVos[i].dayOfMonth;
            }
            let colors = ['Maroon', 'Brown', 'Sienna', 'Tan', 'Orange', 'Olive', 'DarkGreen', 'Lime', 'SeaGreen', 'DarkSlateGray', 'CadetBlue', 'DeepSkyBlue', 'Navy', 'DarkVoilet', 'DarkMagenta', 'MediumVioletRed'];
            let legends = [];
            let series = [];

            for (let i = 0; i < alarmTypeDayAlarmVos.length; i++) {
                let data = [];
                legends.push(this.getAlarmTypeName(alarmTypeDayAlarmVos[i].alarmType));
                for (let j = 0; j < alarmTypeDayAlarmVos[i].dayTotalVos.length; j++) {
                    data.push(alarmTypeDayAlarmVos[i].dayTotalVos[j].total);
                }
                series.push({
                    name: this.getAlarmTypeName(alarmTypeDayAlarmVos[i].alarmType),
                    type: 'line',
                    data: data,
                    itemStyle: {
                        normal: {color: colors[i]}
                    }
                });
            }
            let alarmTotal = new Array(alarmTypeDayAlarmVos[0].dayTotalVos.length);
            let faultTotal = new Array(alarmTypeDayAlarmVos[0].dayTotalVos.length);

            for (let i = 0; i < alarmTotal.length; i++) {
                let alarm = 0;
                let fault = 0;
                for (let j = 0; j < alarmTypeDayAlarmVos.length; j++) {
                    if (alarmTypeDayAlarmVos[j].dayTotalVos[i].total > 0) {
                        alarm += alarmTypeDayAlarmVos[j].dayTotalVos[i].total;
                        if (alarmTypeDayAlarmVos[j].fault) {
                            fault += fault + alarmTypeDayAlarmVos[j].dayTotalVos[i].total;
                        }
                    }
                }
                alarmTotal[i] = alarm;
                faultTotal[i] = fault;
            }
            legends.push('报警合计');
            legends.push('故障合计');
            series.push({
                name: '报警合计',
                type: 'line',
                data: alarmTotal,
                itemStyle: {
                    normal: {color: 'blue'}
                }
            });
            series.push({
                name: '故障合计',
                type: 'line',
                data: faultTotal,
                itemStyle: {
                    normal: {color: 'red'}
                }
            });

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
                    data: legends,
                    type: 'scroll',
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
                    }
                ],
                series: series
            };
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
            month = '0' + month;
        }
        if (day.length == 1) {
            day = '0' + day;
        }
        let dateTime = year + '-' + month + '-' + day;
        return dateTime;
    }
}
