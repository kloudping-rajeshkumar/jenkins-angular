import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickSocialTriggerComponent } from './quick-social-trigger/quick-social-trigger.component'
import { SocialsComponent } from './socials.component';
import {SocialTriggerComponent} from './social-trigger/social-trigger.component';
const routes: Routes = [
  {path:'',component:SocialsComponent,
  children:[
  {path: 'quick-trigger', component: QuickSocialTriggerComponent },
  {path: 'social-trigger', component: SocialTriggerComponent },

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialsRoutingModule { }
