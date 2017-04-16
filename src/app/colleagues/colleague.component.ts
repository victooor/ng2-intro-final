import { Component, OnInit, Input } from '@angular/core';

import { Colleague } from './colleague.model';

@Component({
    moduleId: module.id,
    selector: 'colleague',
    templateUrl: 'colleague.component.html'
})

export class ColleagueComponent implements OnInit {
    @Input() colleague: Colleague;
    constructor() { }

    ngOnInit() { }
}