import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

    constructor() { }

    // client = redis.createClient();

    // redisTest(key: string, value: string) {
    //     this._client.set("string key", "string val");
    // }

    data: any = {
        "username1": [
            { "content": "haha", "color": "red" },
            { "content": "xD", "color": "blue" },
            { "content": "mate", "color": "green" }],

        "username2": [
            { "content": "lol", "color": "cyan" },
            { "content": "wut", "color": "magenta" }]
    };

    getCards(user: string) {
        //console.log(this.data[user]);
        //console.log(JSON.stringify(this.data[user]));
        let cards = JSON.stringify(this.data[user]);
        //console.log(JSON.parse(cards));
        cards = JSON.parse(cards);

        return this.data[user];
        //return cards;
    }
}
