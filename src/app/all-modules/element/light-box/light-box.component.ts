import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {
  public albumsOne: any = [];
  public albumsTwo: any = [];
  public routes = routes;
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/img-0' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';

      this.albumsOne.push({ src: src });
      this.albumsTwo.push({ src: src, caption: caption });
    }
   }
   open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }

  ngOnInit(): void {
  }

}
