import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SocialsRoutingModule } from './socials-routing.module';
import { QuickSocialTriggerComponent } from './quick-social-trigger/quick-social-trigger.component'
import { SocialsComponent } from './socials.component';
import {SocialTriggerComponent} from './social-trigger/social-trigger.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SocialsComponent,
    QuickSocialTriggerComponent,
    SocialTriggerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SocialsRoutingModule,
    NgxPaginationModule
  ]
})
export class SocialsModule { }
