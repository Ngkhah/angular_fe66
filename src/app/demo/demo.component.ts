import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',//tên thẻ
  templateUrl: './demo.component.html', //link file giao diện
  styleUrls: ['./demo.component.scss'] //link css
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
