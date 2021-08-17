import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-footer',
    template: `
        <div class="footer text-center">
            footer app
        </div>
    `,
    styles:[`
        .footer {
            background-color: #ffff66;
            padding: 5rem 0;
            color: black;
        }
    `]
})

export class LayoutFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}