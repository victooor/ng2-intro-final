import { Component, OnInit } from '@angular/core';

import { Colleague } from './colleague.model';
import { ColleagueComponent } from './colleague.component';
import { ColleagueService } from './colleague.service';

@Component({
    moduleId: module.id,
    selector: 'colleagues',
    templateUrl: 'colleagues.component.html',
    styleUrls: ['colleagues.component.css'], 
    providers: [ColleagueService]
})

export class ColleaguesComponent implements OnInit {
    colleagues: Colleague[];
    selectedColleague: Colleague;
    constructor(private colleagueService: ColleagueService) { }

    ngOnInit() {
        this.colleagueService.getColleagues()
            .subscribe(arg => this.colleagues = arg);
          
        // this.colleagues = this.colleagueService.getColleagues();
        // this.colleagues = [
        //     {'id': 1, 'name': 'Colleague 1'},
        //     {'id': 2, 'name': 'Colleague 2'},
        //     {'id': 3, 'name': 'Colleague 3'},
        //     {'id': 4, 'name': 'Colleague 4'},
        //     {'id': 5, 'name': 'Colleague 5'}
        // ];
    }

    onSelect(colleague: Colleague) {
        this.selectedColleague = colleague;
    }
}