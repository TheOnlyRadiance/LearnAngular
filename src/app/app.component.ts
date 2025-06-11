import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
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
