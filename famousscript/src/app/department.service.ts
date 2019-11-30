import { Department } from './employee.model';
export class DepartmentService {
    getDepartment(): Department[] {
        const departmentlist: Department[] = [
            {
                id: 1, name: "IT", employeelist: [
                    { id: 1, name: 'IT wala1' },
                    { id: 2, name: 'IT wala2' },
                    { id: 3, name: 'IT wala3' }
                ]
            },
            {
                id: 2, name: "CS", employeelist: [
                    { id: 1, name: 'CS wala1' },
                    { id: 2, name: 'CS wala2' },
                    { id: 3, name: 'CS wala3' }
                ]
            }
        ]
        return departmentlist;
    }
}