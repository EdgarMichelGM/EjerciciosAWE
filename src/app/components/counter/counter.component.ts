
import { Component } from '@angular/core';
import { Console } from 'console';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter : number = 100; 

  constructor(){
    this.counter++; 
    this.incrementBy(); 
    this.incrementBy(2); 
    this.incrementBy(3); 
  }

  incrementBy(value : number = 1) : void {
      this.counter += value; 
  }
}
