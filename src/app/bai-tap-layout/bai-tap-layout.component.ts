import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bat-tap-layout',
    template: `
        <div>
            <app-layout-header></app-layout-header>
            <div class="row container-fluid p-0 m-0" >
                <div class="col-6 p-0"><app-layout-body-left></app-layout-body-left></div>
                <div class="col-6 p-0"><app-layout-body-right></app-layout-body-right></div>
            </div>
            <app-layout-footer></app-layout-footer>
        </div>
        `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}