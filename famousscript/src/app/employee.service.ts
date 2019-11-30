import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

    // To get employee data
    getEmployee(): Employee[] {
        const employees: Employee[] = [
            { id: 1, name: 'ghanshyam' },
            { id: 2, name: "Bharat" },
            { id: 3, name: "Arun" }
        ]
        return employees;
    }
}