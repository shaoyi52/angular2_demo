import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroService }         from './hero.service';
import { HeroesComponent }     from './script/heroes/heroes.component';
import { HeroDetailComponent } from './script/heroes/hero-detail.component';
import { DashboardComponent }     from './script/heroes/dashboard.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
          path: '',
          redirectTo: '/heroes',
          pathMatch: 'full'
      },
      {
          path: 'heroes',
          component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])
  

  ],
  declarations: [ 
    AppComponent,    
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent    
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
