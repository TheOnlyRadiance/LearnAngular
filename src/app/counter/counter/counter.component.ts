import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `<h3>Counter: {{counter}}</h3>

<button (click)="increaseby(1)">+1</button>
<button (click)="eliminaruno(1)">-1</button>

<button (click)="reset()">reset</button>`,
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 10;


  increaseby(value: number): void {
    this.counter += value;
  }

  eliminaruno(cosita: number): void {
    if(this.counter > 0){
      this.counter -= cosita;
    }
  }

  reset():void{
    this.counter = 10;
  }
}
