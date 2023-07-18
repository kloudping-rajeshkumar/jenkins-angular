import { Component, OnInit } from '@angular/core';
import { routes, ToasterService } from 'src/app/shared/core.index'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public routes = routes;
  constructor(private toast: ToasterService) { }

  ngOnInit(): void {
  }
 
  cancel(): void {
    this.toast.typeError('Your Imaginary file is safe :)', 'Canceled');
  }
  confirm(): void {
    this.toast.typeSuccess('Your Imaginary file is removed :)', 'Completed');
  }

  public typeSuccess() {
    this.toast.typeSuccess('Have fun storming the castle!', 'Toaster fun!');
  }
  public typeInfo() {
    this.toast.typeInfo('Have fun storming the castle!', 'Toaster fun!');
  }

  public typeWarning() {
    this.toast.typeWarning('Have fun storming the castle!', 'Toaster fun!');
  }

  public typeError() {
    this.toast.typeError('Have fun storming the castle!', 'Toaster fun!');
  }
}
