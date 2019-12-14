import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/data.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  empList: any = [];
  clickedEmp: Employee;
  clickedName = 'Default';
  constructor(private router: Router) { }

  ngOnInit() {

    this.empList = [
      {
        id: 1,
        name: 'First Employee',
        salary: 20030
      },
      {
        id: 2,
        name: 'Second Employee',
        salary: 203030
      },
      {
        id: 3,
        name: 'Third Employee',
        salary: 10030
      }
    ];

    console.log(this.empList);

  }

  onClick(emp: Employee) {
    console.log(emp);
    this.clickedEmp = emp;
    // this.router.navigate(['details', emp.id,
    //   emp.name,
    //   emp.salary]);
  }

}
