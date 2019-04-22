import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] = [
  {
    id: 1,
    name: 'Mark',
    gender: 'Male',
    email: 'mark@gmail.com',
    phoneNumber: '2345678',
    contactPreference: 'Email',
    dateOfBirth: new Date('01/01/1990'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Male.jpg'
},
{
  id: 2,
  name: 'John',
  gender: 'Male',
  email: 'john@gmail.com',
  phoneNumber: '+1985674523',
  contactPreference: 'Email',
  dateOfBirth: new Date('01/01/1992'),
  department: 'IT',
  isActive: true,
  photoPath: 'assets/images/images.jpg'
},
{
  id: 3,
  name: 'Smith',
  gender: 'Male',
  email: 'Smith@gmail.com',
  phoneNumber: '+758145155',
  contactPreference: 'Email',
  dateOfBirth: new Date('01/01/1992'),
  department: 'IT',
  isActive: true,
  photoPath: 'assets/images/Female.png'
}
];
  constructor() { }

  ngOnInit() {
  }

}
