import { DepartmentService } from './../department.service';
import { Employee, Department } from './../employee.model';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[];
  employeedepartment: Department[];

  constructor(private readonly empService: EmployeeService,
    private readonly empDepartment: DepartmentService) {
  }

  ngOnInit() {
    this.employeeData();
    this.empDepartmentData();
  }

  employeeData() {
    this.employees = this.empService.getEmployee();
    // console.log(this.employees);
  }

  empDepartmentData() {
    this.employeedepartment = this.empDepartment.getDepartment();
    // console.log(this.employeedepartment[0], "Department Arr");

  }


}
