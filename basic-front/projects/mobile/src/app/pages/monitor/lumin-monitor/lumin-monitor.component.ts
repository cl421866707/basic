import {Component, Inject, Input, OnInit} from '@angular/core';
import {LuminCategory, LuminService, LuminType} from '@lib';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-lumin-monitor',
    templateUrl: './lumin-monitor.component.html',
    styleUrls: ['./lumin-monitor.component.scss']
})
export class LuminMonitorComponent implements OnInit {


    innerRegionId;
    innerRoadId;
    innerConcentId;
    /*
    调光滑动条数值
     */
    dimmingValue = 0;
    marks: any = {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100'
    };

    selectedCategory: LuminCategory;

    selectedLuminType: LuminType;

    luminCategories: LuminCategory[];


    constructor(public http: HttpClient, private fb: FormBuilder, @Inject('apiUrl') public apiUrl, private luminService: LuminService,
                public alertController: AlertController) {
    }


    ngOnInit() {
    }

    @Input()
    set roadId(roadId) {
        this.innerRoadId = roadId;
        if (this.roadId > 0) {
            this.luminService.getLuminCategoriesFetchLuminTypeByRoadId(this.roadId).subscribe(luminCategories => {
                this.buildLuminCategories(luminCategories);
            });
        }
    }

    @Input()
    set regionId(regionId) {
        this.innerRegionId = regionId;
    }

    @Input()
    set concentId(concentId) {
        this.innerConcentId = concentId;
        if (this.concentId > 0) {
            this.luminService.getLuminCategoriesFetchLuminTypeByConcentId(this.concentId).subscribe(luminCategories => {
                this.buildLuminCategories(luminCategories);
            });
        }
    }

    buildLuminCategories(luminCategories: LuminCategory[]) {
        const allCategory = new LuminCategory();
        allCategory.categoryId = 0;
        allCategory.categoryName = '全部';
        const allLuminType: LuminType = new LuminType();
        allLuminType.luminId = 0;
        allLuminType.luminName = '全部';
        luminCategories.unshift(allCategory);
        luminCategories.forEach((item, index) => {
            if (item.luminTypes != null) {
                item.luminTypes.unshift(allLuminType);
            } else {
                item.luminTypes = [allLuminType];
            }
        });
        this.selectedCategory = allCategory;
        this.selectedLuminType = allLuminType;
        this.luminCategories = luminCategories;
    }

    get roadId(): number {
        return this.innerRoadId;
    }

    get regionId(): number {
        return this.innerRegionId;
    }

    get concentId(): number {
        return this.innerConcentId;
    }

    /**
     * 调光按钮获取选中项ID数组
     */
    async adjustLuminance() {
        const alert = await this.alertController.create({
            header: '提示!',
            message: '你确认进行操作吗？',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                    }
                }, {
                    text: '确定',
                    handler: () => {
                        // this.poleService.batchAdjustLuminance(this.dimmingValue, Object.keys(this.mapOfCheckedId)
                        //     .filter(key => this.mapOfCheckedId[key])
                        //     .join(','))
                        //     .subscribe(result => {
                        //         console.log(result);
                        //     });
                    }
                }
            ]
        });

        await alert.present();

    }

    categoryChange(value: string): void {
        this.selectedLuminType = this.selectedCategory.luminTypes[0];
    }

    dimming(dimmingValue) {
        this.dimmingValue = dimmingValue;
        this.adjustLuminance();
    }

}
