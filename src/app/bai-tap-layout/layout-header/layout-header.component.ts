import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    template: `
        <div class="header text-center">
            header app
        </div>
    `,
    styles:[`
        .header {
            background-color: #33ccff;
            padding: 5rem 0;
            color: white;
        }
    `]
})

export class LayoutHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}