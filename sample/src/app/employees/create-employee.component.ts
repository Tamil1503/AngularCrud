import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  previewPhotoName = 'Show Preview';
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth: Date = new Date(2018, 4, 4);
  gender = 'male';
  contactPreference = 'Email';
  isActive = true;
  department: Department[] = [
    {id: 1, name: 'Help Desk', isSelected: false},
    {id: 2, name: 'HR', isSelected: false},
    {id: 3, name: 'IT', isSelected: true},
    {id: 4, name: 'Pay Roll', isSelected: false}
  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2018, 1, 1),
      maxDate: new Date(2018, 12, 30),
      dateInputFormat: 'DD/MMM/YYYY'
    });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
    this.previewPhotoName = this.previewPhoto ? 'Hide Preview' : 'Show Preview';
  }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
    console.log(empForm);
    alert('Saved Successfully !!!');
  }
}
