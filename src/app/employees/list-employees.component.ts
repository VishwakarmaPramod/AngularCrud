import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [

    {
      id: 1,
      name: 'Ram',
      gender: 'Male',
      email: 'ram.xpx@gmail.com',
      phoneNumber: 9559404556,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/08/1992'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/raam.jpg'
    },
    {
      id: 2,
      name: 'Sita',
      gender: 'Female',
      email: 'sita@gmail.com',
      phoneNumber: 9335716017,
      contactPreference: 'Email',
      dateOfBirth: new Date('09/11/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/sita.jpg'
    },
    {
      id: 3,
      name: 'Vikas',
      gender: 'Male',
      email: 'vikask@gmail.com',
      phoneNumber: 7325632232,
      contactPreference: 'Email',
      dateOfBirth: new Date('01/08/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/vikas.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
