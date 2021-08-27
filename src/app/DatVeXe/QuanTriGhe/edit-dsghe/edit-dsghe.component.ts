import { DsGheComponent } from './../ds-ghe/ds-ghe.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-dsghe',
  template: `
  <div class="bg-light">
    <div class="container mb-3">
      <div class="row">
        <div class="col-4 mx-auto">
          <h2 #title>Thêm Ghế</h2>
          <input type="text" class="form-control mt-3" #soGhe placeholder="Số ghế">
          <input type="text" class="form-control mt-3" #ten placeholder="Tên ghế">
          <input type="text" class="form-control mt-3" #gia placeholder="Giá ghế">
          <input type="text" class="form-control mt-3" #trangthai placeholder="Trạng thái">
          <button class="btn btn-primary mt-3" (click)="themGheParent(soGhe.value,ten.value,gia.value,trangthai.value)">Add</button>
        </div>
      </div>
    </div>
    <hr px-5>
    <app-ds-ghe></app-ds-ghe>
  </div>
  `,
  styleUrls: ['./edit-dsghe.component.scss']
})
export class EditDSGheComponent implements OnInit {
  @ViewChild(DsGheComponent) DSGheCom: any;
  @ViewChild('title') titleHeading!:ElementRef;
  themGheParent(...thamso:any[]){
    
    let gheDuocThem = {
      SoGhe: thamso[0],
      TenGhe: thamso[1],
      Gia: thamso[2],
      TrangThai:thamso[3]
    }
    if(thamso[3]=='false'){
      gheDuocThem.TrangThai = false;
    } else if(thamso[3]=='true'){
      gheDuocThem.TrangThai = true;
    } else {
      gheDuocThem.TrangThai = false;

    }
    this.DSGheCom.ThemGhe(gheDuocThem)
    this.titleHeading.nativeElement.innerHTML = "Đã thêm"
    console.log(gheDuocThem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
