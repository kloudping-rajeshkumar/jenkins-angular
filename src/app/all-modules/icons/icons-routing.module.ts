import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons.component';

const routes: Routes = [
  { 
    path: '', 
    component: IconsComponent,
    children: [
      { 
        path: 'fontawesome', 
        loadChildren: () => import('./fontawesomes/fontawesomes.module').then(m => m.FontawesomesModule) 
      }, 
      { 
        path: 'feather', 
        loadChildren: () => import('./feathers/feathers.module').then(m => m.FeathersModule) 
      }, 
      { 
        path: 'ionic', 
        loadChildren: () => import('./ionic/ionic.module').then(m => m.IonicModule) 
      }, 
      { 
        path: 'material', 
        loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule) 
      }, 
      { 
        path: 'pe7', 
        loadChildren: () => import('./pe7/pe7.module').then(m => m.Pe7Module) 
      },  
      { 
        path: 'simpleline', 
        loadChildren: () => import('./simplelines/simplelines.module').then(m => m.SimplelinesModule) 
      }, 
      { 
        path: 'themify', 
        loadChildren: () => import('./themify/themify.module').then(m => m.ThemifyModule) 
      }, 
      { 
        path: 'weather', 
        loadChildren: () => import('./weathers/weathers.module').then(m => m.WeathersModule) 
      }, 
      { 
        path: 'typicon', 
        loadChildren: () => import('./typicons/typicons.module').then(m => m.TypiconsModule) 
      }, 
      { 
        path: 'flag', 
        loadChildren: () => import('./flags/flags.module').then(m => m.FlagsModule) 
      }
    ] }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
