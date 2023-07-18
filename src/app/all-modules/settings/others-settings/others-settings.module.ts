import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersSettingsRoutingModule } from './others-settings-routing.module';
import { OthersSettingsComponent } from './others-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OthersSettingsComponent
  ],
  imports: [
    CommonModule,
    OthersSettingsRoutingModule,
    SharedModule
  ]
})
export class OthersSettingsModule { }
