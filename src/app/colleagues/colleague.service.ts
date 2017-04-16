import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ColleagueService {

    constructor(private http: Http) { }

    getColleagues() {
        return this.http.get('app/colleagues.json')
            .map((response: Response) => response.json());
        // return [
        //     {'id': 1, 'name': 'Colleague 1'},
        //     {'id': 2, 'name': 'Colleague 2'},
        //     {'id': 3, 'name': 'Colleague 3'},
        //     {'id': 4, 'name': 'Colleague 4'},
        //     {'id': 5, 'name': 'Colleague 5'}
        // ];
    }
}