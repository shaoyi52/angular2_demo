import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './script/heroes/heroes.component';

const appRoutes: Routes = [

  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
