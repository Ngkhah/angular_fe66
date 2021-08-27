import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  template: `
  <ng-container *ngIf="!itemGhe.TrangThai;else gheDaDuocChon">
  <button class="mr-2 mb-2" [ngClass]="{'btn-success':status}" mat-raised-button (click)="datGhe()">{{itemGhe.SoGhe}}</button>
  </ng-container>
    
    <ng-template #gheDaDuocChon>
      <button class="ghechon mr-2 mb-2 btn-danger btn text-white" mat-stroked-button disabled>{{itemGhe.SoGhe}}</button>
    </ng-template>
  `,
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  

  @Input() itemGhe!:DSGhe;

  //dat ghe ban dau đặt cho nó là false sau khi chọn hàm đặt ghế (output)
  status:boolean = false;
  @Output() emitStatus = new EventEmitter();

  datGhe(){
    if(this.status){
      this.status = false;
    }else{
    this.status = true;
    }
    // let obj = {Status: this.status, ItemGhe:this.itemGhe}
    this.emitStatus.emit(this.status);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

interface DSGhe {
  SoGhe:number,
  TenGhe:string,
  Gia:number,
  TrangThai:boolean
}
