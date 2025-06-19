import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = 
  ['Superman','Ironman','Hulk','Thor','Captain America']
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
}
