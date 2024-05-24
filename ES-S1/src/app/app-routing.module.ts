import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FiatComponent } from './Components/fiat/fiat.component';
import { AudiComponent } from './Components/audi/audi.component';
import { FordComponent } from './Components/ford/ford.component';
import { Page404Component } from './Components/page404/page404.component'; // Import the Page404Component


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Home',
  },
  {
    path: 'fiat',
    component: FiatComponent,
    title: 'Fiat',
  },
  {
    path: 'audi',
    component: AudiComponent,
    title: 'Audi',
  },
  {
    path: 'ford',
    component: FordComponent,
    title: 'Ford',
  },
  {
    path: '**',
    component: Page404Component
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
