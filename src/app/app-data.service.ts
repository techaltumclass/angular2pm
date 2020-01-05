import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  getData() {
    console.log('getData');
  }

  updateData(emp : any) {
    console.log(emp);
  }
}
