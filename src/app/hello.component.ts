import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{inputdata?.name}}!</h1> Age : {{inputdata?.age}} 
  <p>
  <button (click)="update()">Refresh<button>
  
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input('inputdata') data: any;
  inputdata: any;

  ngOnInit() {
    this.inputdata = this.data;
  }

  update() {
    console.log('before update', this.data, this.inputdata);
    this.ngOnInit();

    //this.data.name = 'Balaji';
    this.inputdata.name = 'Balaji';
    console.log('After update', this.data, this.inputdata);
  }
}
