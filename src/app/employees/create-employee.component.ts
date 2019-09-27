import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  }
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'Information Technology' },
    { id: 3, name: 'HR' },
    { id: 4, name: 'Payroll' }
  ];
  constructor(private _employeeSrvice:EmployeeService,
              private _router:Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue'
      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }

  // saveEmpoyee(empForm: NgForm): void {

  //   console.log(empForm);
  // }

  saveEmpoyee(): void {
   this._employeeSrvice.save(this.employee);
   this._router.navigate(['employees'])
  }
}
