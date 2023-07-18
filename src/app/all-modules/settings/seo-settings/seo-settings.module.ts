import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoSettingsRoutingModule } from './seo-settings-routing.module';
import { SeoSettingsComponent } from './seo-settings.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    SeoSettingsComponent
  ],
  imports: [
    CommonModule,
    SeoSettingsRoutingModule,
    MaterialModule,
    MatAutocompleteModule,
    SharedModule
  ]
})
export class SeoSettingsModule { }
