import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comment : string = "";
  LikeCounter: number = 2;
  comments : string[];

  constructor() { }

  ngOnInit() {
    this.comments = ["I love Strawberry Milkshake!", 
    "This the Best drink ever, I proposed my long distance girlfriend while she was having having Strawberry Milksake. Everytime I have this it reminds me of her", 
    "I'm a Vegan and I dont consume dairy products. You shoud not have them too as cows are raped so they can produce milk all thier lives. Stop Dairy Consumtion!"];
  }

  LikeClick() {
    this.LikeCounter += 1;
  }

  submit(){
    this.comments.push(this.comment);
    this.comment = "";
  }

}
