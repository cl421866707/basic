import {Component, Inject, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
    ActivatedRoute,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RoutesRecognized
} from '@angular/router';
import {NzDrawerService, NzI18nService, NzMessageService} from 'ng-zorro-antd';
import {LoginService} from '@lib';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {

    isCollapsed = false;
    triggerTemplate: TemplateRef<void> | null = null;
    @ViewChild('trigger') customTrigger: TemplateRef<void>;

    contentLayout = 'content-layout';

    mainContent = 'content';

    showBreadcrumb = false;

    menuFirst = '首页';
    menuSecond = '实时监控';
    menuThird = '';
    menuFourth = '';

    logoPath: string;

    constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute, private messageService: NzMessageService,
                private drawerService: NzDrawerService, private i18n: NzI18nService, @Inject('apiUrl') public apiUrl) {
        this.logoPath = this.apiUrl.substring(0, this.apiUrl.length - 5) + 'data/logo/logo.png?t=' + new Date();
    }

    changeNavigation(first?: string, second?: string, third?: string, fourth?: string) {
        this.menuFirst = first;
        this.menuSecond = second;
        this.menuThird = third;
        this.menuFourth = fourth;
    }

    ngOnInit() {
        this.changeContentType(this.router.url);
        this.router.events.subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.changeContentType(event.url);
                } else if (event instanceof NavigationEnd) {
                    //
                } else if (event instanceof NavigationCancel) {
                    //
                } else if (event instanceof NavigationError) {
                    //
                } else if (event instanceof RoutesRecognized) {
                    //
                }
            }
        );
        console.log(this.apiUrl);
    }

    logout() {
        this.loginService.logout().subscribe(
            response => {
                this.messageService.success('你已成功退出系统！', {
                    nzDuration: 2000
                }).onClose.subscribe(value => this.router.navigateByUrl('/setup'));
            }
        );
    }

    changeContentType(url) {
        if (url === '/main/monitor') {
            this.showBreadcrumb = false;
            this.isCollapsed = true;
            this.contentLayout = 'map-layout';
            this.mainContent = 'map-content';
        } else {
            this.showBreadcrumb = true;
            this.isCollapsed = false;
            this.contentLayout = 'content-layout';
            this.mainContent = 'content';
        }
    }

    ngOnChanges() {
        this.route.firstChild.url.subscribe(data => {
            console.log(data);
        });
    }

}
