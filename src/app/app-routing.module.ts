import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitbtnComponent } from './submitbtn/submitbtn.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';

const routes: Routes = [
  { path: '', component: CustomComponentComponent, pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
