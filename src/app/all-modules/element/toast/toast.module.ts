import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    ToastRoutingModule,
    ToastrModule.forRoot({
    }),
  ]
})
export class ToastModule { }
