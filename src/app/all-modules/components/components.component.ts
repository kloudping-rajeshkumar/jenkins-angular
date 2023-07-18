import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  HostListener,
  Inject,
  Renderer2,
} from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  public selected = false;
  public routes = routes;
  public sections = 9;

  public scroll: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let section = document.querySelector('section');
    let navLink = document.querySelector('.add-a');
  }
  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = window.scrollY / this.sections;
    });
  }
  inView(ele:any) {
    ele.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})
  }
}
