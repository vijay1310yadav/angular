import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Route } from '@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes', component: HeroesComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
