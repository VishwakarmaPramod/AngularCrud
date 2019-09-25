import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto=false;
  datePickerConfig:Partial<BsDatepickerConfig>;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'Information Technology' },
    { id: 3, name: 'HR' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass:'theme-dark-blue'
      });
   }

   togglePhotoPreview(){
     this.previewPhoto=!this.previewPhoto;
   }
  ngOnInit() {
  }

  saveEmpoyee(empForm: NgForm): void {

    console.log(empForm);
  }
}
