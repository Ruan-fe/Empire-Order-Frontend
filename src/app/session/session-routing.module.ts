import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionListComponent } from './session-list/session-list.component';


const routes: Routes = [
  {path: 'session',component: SessionFormComponent},
  {path: 'session/:id',component: SessionFormComponent},
  {path: 'session-list',component: SessionListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
