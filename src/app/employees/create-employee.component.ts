import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

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
  constructor() {
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

  saveEmpoyee(NewForm: Employee): void {

    console.log(NewForm);
  }
}
