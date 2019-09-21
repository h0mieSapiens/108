import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstnum: number = 0;
  secnum: number = 0;

  result: number = 0;


  constructor() { }

  ngOnInit() {
  }
  sum() {
    this.result = this.firstnum + this.secnum;
  }
  res() {
    this.result = this.firstnum - this.secnum;
  }
  mult() {
    this.result = this.firstnum * this.secnum;
  }
  div() {
    this.result = this.firstnum / this.secnum;
  }
}
