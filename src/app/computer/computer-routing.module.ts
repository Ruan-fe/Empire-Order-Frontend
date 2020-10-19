import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerFormComponent } from './computer-form/computer-form.component';
import { ComputerListComponent } from './computer-list/computer-list.component';


const routes: Routes = [
  {path: 'computer',component: ComputerFormComponent},
  {path: 'computer-list',component: ComputerListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerRoutingModule { }
