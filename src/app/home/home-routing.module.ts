import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriterioComponent } from './criterio/criterio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'criterio',
    component: CriterioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
