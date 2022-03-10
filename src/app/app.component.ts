import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //name = 'Angular ' + VERSION.major;

  data = { name: 'Jaya', age: 44 };

  dupData = this.data;
  updateData() {
    alert('fsdfdsf');
    //this.data.name = 'Priya'; 
    //this.data.age = 42; 
    this.data = {name:"priya",age:40}
    console.log(this.data);
  }

  ngOnInit() {}
}
