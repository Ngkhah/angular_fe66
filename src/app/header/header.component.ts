import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<div class="app-header">helo peter </div>`,
    styles:[`
    .app-header{
        background: red;
        color: white;
    }
    `]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}