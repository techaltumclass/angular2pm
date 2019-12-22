import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from 'src/app/data.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input('name') empName;
  @Input('emp') emp: Employee;

  employee = new Employee(18, 'Dr IQ', 'this.powers[0]');
  constructor(private readonly route: ActivatedRoute) {
    console.log(this.emp);
  }

  ngOnInit() {
    // this.employee = { name: 'Nee name', id: 10, salary: '10230' };
    console.log(this.emp);
    this.route.params.subscribe((params: Employee) => {
      this.emp = params;
      return console.log(params);
    });

  }

  ngAfterContentInit() {
    this.employee = this.emp;
  }

  ngAfterViewInit() {
    this.employee = this.emp;
  }


  mySubmitMethod() {
    alert(JSON.stringify(this.emp));
  }

}
