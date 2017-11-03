import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },{
    path: 'zip',
    component: ZipcodeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
