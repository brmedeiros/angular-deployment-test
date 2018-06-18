import { Component } from '@angular/core';
import { DbService } from './db.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    cards: any[] = [];

    constructor(private _dbService: DbService) { }

    ngOnInit() {
        this.cards = this._dbService.getCards("username1");
        //this._dbService.redisTest("master", "apprentice");
        //console.log(this.cards);
    }
}
