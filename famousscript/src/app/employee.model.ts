export class Employee {
    id: number;
    name: string;
}

export class Department {
    id: number;
    name: string;
    employeelist: Employee[]
}