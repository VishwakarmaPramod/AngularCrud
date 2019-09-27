import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [

        {
            id: 1,
            name: 'Ram',
            gender: 'Male',
            email: 'ram.xpx@gmail.com',
            phoneNumber: 9559404556,
            contactPreference: 'Email',
            dateOfBirth: new Date('10/08/1992'),
            department: '2',
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
            department: '3',
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
            department: '1',
            isActive: true,
            photoPath: 'assets/images/vikas.jpg'
        }
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee : Employee){
        this.listEmployees.push(employee);
    }
}