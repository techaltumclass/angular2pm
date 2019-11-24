import { Employee, Department } from './data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

     getEmployees(): Employee[] {
        const employees: Employee[] = [
            {
                id: 1,
                name: 'ABC',
            },
            {
                id: 2,
                name: 'XYX'
            }
        ]

        return employees
    }
}