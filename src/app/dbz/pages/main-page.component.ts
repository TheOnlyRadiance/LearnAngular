import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false,
})

export class MainPageComponent {
    public characters: Character[] = [{
        name: 'Goku',
        power: 15000
    },{
        name: 'Piccolo',
        power: 12000
    },
    {
        name: 'Vegeta',
        power: 13000
    }];

    onNewCharacter(character:Character):void{
    console.log('MainPage');
    console.log(character);
  }
}