import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-body-left',
    template: `
        <div class="left text-center">
           Left
        </div>
    `,
    styles:[`
        .left {
            background-color: #33cccc;
            padding: 5rem 0;
            color: black;
        }
    `]

})

export class LayoutBodyLeftComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}