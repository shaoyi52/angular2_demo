import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './../../hero';
import { HeroService } from './../../hero.service';

@Component({
   selector: 'my-heroes',
   templateUrl:'./app/views/heroes/heroes.component.html',
   styleUrls: [ './app/styles/heroes/heroes.component.css' ],
   providers: [HeroService]
})



export class HeroesComponent  {
   heroes:Hero[];   
   selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

     ngOnInit(): void {
      this.getHeroes();
    }
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
 }
