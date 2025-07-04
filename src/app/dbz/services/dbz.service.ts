import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';



@Injectable({
    providedIn: 'root'
})

export class DbzService {
    
   public characters: Character[] = [{
        id:uuid(),
        name: 'Goku',
        power: 15000
    },{
        id:uuid(),
        name: 'Piccolo',
        power: 12000
    },
    {
        id:uuid(),
        name: 'Vegeta',
        power: 13000
    }];

    addCharacter(character:Character):void{

        const newCharacter: Character = { id: uuid(), ...character};

     this.characters.unshift(newCharacter)
  }
  
  // this.characters.splice(numero,1);
  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id);
  }
    
}