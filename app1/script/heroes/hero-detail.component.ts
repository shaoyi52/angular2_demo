import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './../../hero';
import { HeroService } from './../../hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl:"./app/views/heroes/hero-detail.component.html",
})
export class HeroDetailComponent {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  hero: Hero;

  
   ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }


  goBack(): void {
    this.location.back();
  }
}

