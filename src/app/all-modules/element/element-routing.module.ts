import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './element.component';

const routes: Routes = [
  {
    path: '',
    component: ElementComponent,
    children: [
      {
        path: 'sweet-alert',
        loadChildren: () =>
          import('./sweet-alert/sweet-alert.module').then(
            (m) => m.SweetAlertModule
          ),
      },
      {
        path: 'tooltip',
        loadChildren: () =>
          import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
      },
      {
        path: 'popover',
        loadChildren: () =>
          import('./popover/popover.module').then((m) => m.PopoverModule),
      },
      {
        path: 'ribbon',
        loadChildren: () =>
          import('./ribbon/ribbon.module').then((m) => m.RibbonModule),
      },
      {
        path: 'clipboard',
        loadChildren: () =>
          import('./clipboard/clipboard.module').then((m) => m.ClipboardModule),
      },
      {
        path: 'draganddrop',
        loadChildren: () =>
          import('./draganddrop/draganddrop.module').then(
            (m) => m.DraganddropModule
          ),
      },
      {
        path: 'range-slider',
        loadChildren: () =>
          import('./range-slider/range-slider.module').then(
            (m) => m.RangeSliderModule
          ),
      },
      {
        path: 'rating',
        loadChildren: () =>
          import('./rating/rating.module').then((m) => m.RatingModule),
      },

      {
        path: 'text-editor',
        loadChildren: () =>
          import('./text-editor/text-editor.module').then(
            (m) => m.TextEditorModule
          ),
      },
      {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then((m) => m.CounterModule),
      },
      {
        path: 'scroll-bar',
        loadChildren: () =>
          import('./scroll-bar/scroll-bar.module').then(
            (m) => m.ScrollBarModule
          ),
      },
      {
        path: 'spinner',
        loadChildren: () =>
          import('./spinner/spinner.module').then((m) => m.SpinnerModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'light-box',
        loadChildren: () =>
          import('./light-box/light-box.module').then((m) => m.LightBoxModule),
      },
      {
        path: 'sticky-notes',
        loadChildren: () =>
          import('./sticky-notes/sticky-notes.module').then(
            (m) => m.StickyNotesModule
          ),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: 'horizontal-timeline',
        loadChildren: () =>
          import('./horizontal-timeline/horizontal-timeline.module').then(
            (m) => m.HorizontalTimelineModule
          ),
      },
      {
        path: 'form-wizard',
        loadChildren: () =>
          import('./form-wizard/form-wizard.module').then(
            (m) => m.FormWizardModule
          ),
      },
  { path: 'toast', loadChildren: () => import('./toast/toast.module').then(m => m.ToastModule) },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementRoutingModule {}
