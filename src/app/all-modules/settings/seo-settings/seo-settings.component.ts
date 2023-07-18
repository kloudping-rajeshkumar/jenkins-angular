import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import { ENTER,COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-seo-settings',
  templateUrl: './seo-settings.component.html',
  styleUrls: ['./seo-settings.component.scss']
})
export class SeoSettingsComponent implements OnInit {
  public routes = routes;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  Keyword: string[] = ['Lorem', 'Ipsum'];
  allFruits: string[] = [];

    @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

    constructor() {
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) =>
          fruit ? this._filter(fruit) : this.allFruits.slice()
        )
      );
    }
 
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.Keyword.push(value);
      }
  
      // Clear the input value
      event.chipInput!.clear();
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(Keyword: string): void {
      const index = this.Keyword.indexOf(Keyword);
  
      if (index >= 0) {
        this.Keyword.splice(index, 1);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.Keyword.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter((fruit) =>
        fruit.toLowerCase().includes(filterValue)
      );
    }
  ngOnInit(): void {
  }

}
