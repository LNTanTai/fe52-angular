import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe52-angular';
  message: string = 'Hello CyberPunk';
  number: number = 0.5
  price: number = 3000
  date: Date = new Date()

  odj: any = {
    hoTen: "Dan",
    lop: "FE52",
    tuoi: 25
  }

  numbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  message1: string = 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias consectetur ullam atque rem nisi illo eaque iure modi dignissimos. Rerum id nemo fuga unde commodi ratione, assumenda necessitatibus eaque!'

}
