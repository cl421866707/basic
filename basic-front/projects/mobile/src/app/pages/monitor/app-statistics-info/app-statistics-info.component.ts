import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DatePipe} from '@angular/common';
import {ReportService} from '@lib';

@Component({
    selector: 'app-app-statistics-info',
    templateUrl: './app-statistics-info.component.html',
    styleUrls: ['./app-statistics-info.component.scss']
})
export class AppStatisticsInfoComponent implements OnInit {

    @Input() regionId = null;
    @Input() roadId = null;
    @Input() concentId = null;

    defaultHref = '';

    activeKey = ['0', '1'];

    accordions: Array<any> = [
        {title: '亮灯率统计', option: {}},
        {title: '用电率统计', option: {}, inactive: false},
        {title: '故障率统计', option: {}, inactive: true}
    ];

    constructor(public modalController: ModalController, private reportService: ReportService, private navParams: NavParams) {
    }

    ngOnInit() {
        const startDate = new Date();
        const endDate = new Date();
        startDate.setTime(endDate.getTime() - 14 * 24 * 60 * 60 * 1000);
        const datePipe = new DatePipe('zh-CN');
        this.reportService.getRoadStatisticsGroupByDate(datePipe.transform(startDate, 'yyyy-MM-dd'),
            datePipe.transform(endDate, 'yyyy-MM-dd')).subscribe(data => {
            this.drawLightingRateChart(data);
            this.drawPowerChart(data);
            this.drawFaultChart(data);
        });
    }

    onChange($event) {
    }

    close() {
        this.modalController.dismiss();
    }

    drawLightingRateChart(data) {
        const dates = [];
        const lightingRate = [];
        data.forEach((item, index) => {
            dates.push(item.statDate);
            const lampNum = item.lampNum;
            if (lampNum !== 0) {
                lightingRate.push((lampNum - item.faultNum) * 100 / lampNum);
            } else {
                lightingRate.push(0);
            }
        });
        this.accordions[0].option = {
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dates
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100
            },
            series: [{
                data: lightingRate,
                type: 'bar'
            }]
        };
    }

    drawPowerChart(data) {
        const dates = [];
        const powerConsume = [];
        data.forEach((item, index) => {
            dates.push(item.statDate);
            powerConsume.push(item.powerConsume);
        });
        this.accordions[1].option = {
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dates
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100
            },
            series: [{
                data: powerConsume,
                type: 'bar'
            }]
        };
    }

    drawFaultChart(data) {
        const dates = [];
        const faultNum = [];
        const faultRate = [];
        data.forEach((item, index) => {
            dates.push(item.statDate);
            faultNum.push(item.faultNum);
            const lampNum = item.lampNum;
            if (lampNum !== 0) {
                faultRate.push(item.faultNum * 100 / lampNum);
            } else {
                faultRate.push(0);
            }
        });
        this.accordions[2].option = {
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: dates
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100
            },
            series: [{
                data: faultRate,
                type: 'bar'
            }]
        };
    }


}
