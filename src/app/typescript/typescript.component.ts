import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Employee } from '../data.model';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  employees: Employee[];

  constructor(private readonly service: AppService) {

  }

  getEmployeeData(): any {
    return this.service.getEmployees();
  }

  ngOnInit() {
    this.employees = this.getEmployeeData();
    console.log(this.employees);
  }

}
