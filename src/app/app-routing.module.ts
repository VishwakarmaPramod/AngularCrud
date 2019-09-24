import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const routes: Routes = [
  {path:'employees',component:ListEmployeesComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'',redirectTo:'/employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ListEmployeesComponent,CreateEmployeeComponent]
 