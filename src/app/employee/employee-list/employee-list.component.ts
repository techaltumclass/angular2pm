import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  empList: any = [];
  clickedName = 'random';
  constructor() { }

  ngOnInit() {

    this.empList = [
      {
        name: 'First Employee',
        salary: 20030
      },
      {
        name: 'Second Employee',
        salary: 203030
      },
      {
        name: 'Third Employee',
        salary: 10030
      }
    ];

    console.log(this.empList);

  }

  onClick(name){
    this.clickedName = name;
  }

}

export class Employee {
  name: string;
  salary: number
}
