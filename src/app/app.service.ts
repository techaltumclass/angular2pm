import { Employee, Department } from './data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

     getEmployees(): Employee[] {
        const employees: Employee[] = [
            {
                id: 1,
                name: 'ABC',
                salary:'2312'
            },
            {
                id: 2,
                name: 'XYX',
                salary: '23423'
            }
        ]

        return employees
    }
}