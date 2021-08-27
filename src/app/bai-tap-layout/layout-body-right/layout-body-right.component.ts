import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-body-right',
    template: `
        <div class="right text-center">
           Right
        </div>
    `,
    styles:[`
        .right {
            background-color: #33cc99;
            padding: 5rem 0;
            color: black;
        }
    `]

})

export class LayoutBodyRightComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}