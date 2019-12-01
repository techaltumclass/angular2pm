import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHidden = false;
  constructor() { }

  ngOnInit() {
  }

  showDiv() {
    this.isHidden = !this.isHidden ;
  }

}
