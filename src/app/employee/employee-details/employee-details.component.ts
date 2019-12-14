import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from 'src/app/data.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input('name') empName;
  @Input('emp') emp: Employee;

  constructor(private readonly route: ActivatedRoute) {
    console.log(this.emp);
  }

  ngOnInit() {
    console.log(this.emp);
    this.route.params.subscribe((params: Employee) => {
      this.emp = params;
      return console.log(params);
    });

  }



}
