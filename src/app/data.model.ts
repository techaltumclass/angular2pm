export class Employee {

    constructor(
        public id: number,
        public name: string,
        public salary: string,
      ) {  }

}


export class Department{
    id: number;
    name: string;
    employees: Employee[];
}
