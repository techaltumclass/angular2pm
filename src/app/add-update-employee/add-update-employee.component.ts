import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.scss']
})
export class AddUpdateEmployeeComponent implements OnInit {
  formData: any = [];
  submitted: boolean;

  constructor(private service: AppDataService, private form: FormBuilder) { }
  formGroup: FormGroup;

  ngOnInit() {

    this.formGroup = this.form.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      salary: ['']
    });


    this.formData.employee = {
      name: 'employee name',
      salary: 4200
    }
  }

  mySubmitMethod() {
    console.log('form called');
    this.service.updateData(this.formData.employee);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value, null, 4));
  }

}
