import { DbzService } from './../services/dbz.service';
import { DbzModule } from './../dbz.module';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false,
})

export class MainPageComponent {

    constructor(private dbzSerive: DbzService) {}

    get characters(): Character[] {
        return this.dbzSerive.characters;
    }

    onDeleteCharacter(id: string): void {
        this.dbzSerive.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzSerive.addCharacter(character);
    }
}