import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { DataService,routes } from '../shared/core.index';
import { SideBarService } from '../shared/side-bar/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public routes = routes;

  side_bar_data: Array<any> = [];

  base = '';
  page = '';
  currentUrl = '';

  constructor(private data: DataService, public router: Router, private sideBar: SideBarService) {
    this.side_bar_data = this.data.sideBar;
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
  }

  ngOnInit() {}
  private getRoutes(route: any): void {
    this.currentUrl = route.url;    
    let splitVal = route.url.split('/');
    
    this.base = splitVal[1];
    
    this.page = splitVal[2];

    if (
      this.currentUrl == routes.dealsDashboard ||
      this.currentUrl == routes.leadsDashboard ||
      this.currentUrl == routes.projectsDashboard
    ) {
      this.base = 'dashboard'
    }
  
    if (
      this.currentUrl == routes.basicinputs ||
      this.currentUrl == routes.inputgroups ||
      this.currentUrl == routes.horizontalform ||
      this.currentUrl == routes.verticalform ||
      this.currentUrl == routes.formmask ||
      this.currentUrl == routes.formvalidation
    ) {
      this.base = 'forms'
    }
    if (
      this.currentUrl == routes.basictables ||
      this.currentUrl == routes.datatables
    ) {
      this.base = 'tables'
    }
    if (
      this.currentUrl == routes.faq ||
      this.currentUrl == routes.terms ||
      this.currentUrl == routes.privacyPolicy ||
      this.currentUrl == routes.blankPage
    ) {
      this.base = 'pages'
    }
  }

  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
}
