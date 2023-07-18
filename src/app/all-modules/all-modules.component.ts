import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DataService, ThemeService } from '../shared/core.index';
import { SideBarService } from '../shared/side-bar/side-bar.service';
@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrls: ['./all-modules.component.scss'],
})
export class AllModulesComponent implements OnInit {
  public miniSidebar: boolean = false;
  public expandMenu: boolean = false;
  public mobileSidebar: boolean = false;
  public sideBarActivePath: boolean = false;
  public headerActivePath: boolean = false;

  public currentPrimaryTheme: string = '0';
  public currentHeaderStyle: string = '0';
  public currentSidebarStyle: string = '0';
  public currentFontStyle: string = '0';

  public base = '';
  public page = '';

  constructor(
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    private theme: ThemeService
  ) {
    this.getRoutes(this.router);
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.theme.getCurrentPrimarySkin().subscribe((res: string) => {
      this.currentPrimaryTheme = res;
    });
    this.theme.getCurrentHeaderStyle().subscribe((res: string) => {
      this.currentHeaderStyle = res;
    });
    this.theme.getCurrentSidebarStyle().subscribe((res: string) => {
      this.currentSidebarStyle = res;
    });
    this.theme.getCurrentFontStyle().subscribe((res: string) => {
      this.currentFontStyle = res;
    });

    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });

    this.sideBar.toggleMobileSideBar.subscribe((res: any) => {
      if (res == 'true' || res == true) {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });

    this.sideBar.expandSideBar.subscribe((res: any) => {
      this.expandMenu = res;
      if (res == false && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      if (res == true && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            let menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  ngOnInit() {}
  getRoutes(event: any) {
    let splitVal = event.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    if (
      event.url.split('/')[1] === 'error-404' ||
      event.url.split('/')[1] === 'error-500' ||
      event.url.split('/')[1] === 'login' ||
      event.url.split('/')[1] === 'register' ||
      event.url.split('/')[1] === 'forgot-password'
    ) {
      this.sideBarActivePath = false;
      this.headerActivePath = false;
    } else {
      this.sideBarActivePath = true;
      this.headerActivePath = true;
    }
  }

}
