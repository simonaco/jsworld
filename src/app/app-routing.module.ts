import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroComponent } from './hero/hero.component';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'table', component: TableDashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
