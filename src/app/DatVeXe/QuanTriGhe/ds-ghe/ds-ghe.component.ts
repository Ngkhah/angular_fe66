import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-ghe',
  template: `
    <div class="container p-4">
    <div class="row bg-light">
        <div class="col-12">
            <h1 class="mt-0 text-warning text-center">ĐẶT VÉ XE BUS HÃNG CYBERSOFT</h1>
        </div>
        <div class="col-6 mx-auto  px-4 pb-4 text-center line">
            <div class="row">
                <div class="col-8 mx-auto  px-4 pb-4 text-center">
                    <button class="taixe text-dark" mat-stroked-button disabled>Tài xế</button> <br>
                    <hr>
                    <app-ghe *ngFor="let ghe of arrDSGhe" [itemGhe]="ghe" (emitStatus)="DatGheParent($event,ghe)"></app-ghe>
                </div>

            </div>

        </div>
        <div class="col-6 mx-auto  px-4 pb-4 text-left">
            <h3 class="text-info text-center">Danh sách ghế đã đặt({{soGheDaDat}})</h3><br>
            <h6 class="text-muted pl-4 pr-4" *ngFor="let ghe of DanhSachGheDangDat">
                <span>Tên ghế: {{ghe.TenGhe}} </span>
                <span class="giaghe">Giá ghế: {{ghe.Gia}}$</span>
                
            </h6>
            <hr>
            <h5>Tổng tiền: {{100 * soGheDaDat}} $</h5>
            <h5>Số ghế còn lại:{{soGheConLai}}</h5>

            <!-- border-right: 1px solid #dadbdc; -->
        </div>

    </div>
</div>
  `,
  styleUrls: ['./ds-ghe.component.scss']
})
export class DsGheComponent implements OnInit {
  

  arrDSGhe:DSGhe[]=[
    {SoGhe: 1 ,TenGhe: " số 1 ", Gia:100, TrangThai:false}, 
    {SoGhe: 2 ,TenGhe: " số 2 ", Gia:100, TrangThai:false}, 
    {SoGhe: 3 ,TenGhe: " số 3 ", Gia:100, TrangThai:false}, 
    {SoGhe: 4 ,TenGhe: " số 4 ", Gia:100, TrangThai:false}, 
    {SoGhe: 5 ,TenGhe: " số 5 ", Gia:100, TrangThai:false}, 
    {SoGhe: 6 ,TenGhe: " số 6 ", Gia:100, TrangThai:false}, 
    {SoGhe: 7 ,TenGhe: " số 7 ", Gia:100, TrangThai:false}, 
    {SoGhe: 8 ,TenGhe: " số 7 ", Gia:100, TrangThai:false}, 
    {SoGhe: 9 ,TenGhe: " số 9 ", Gia:100, TrangThai:false},
    {SoGhe:10 ,TenGhe: " số 10 ", Gia:100, TrangThai:false}, 
    {SoGhe:11 ,TenGhe: " số 11 ", Gia:100, TrangThai:false}, 
    {SoGhe:12 ,TenGhe: " số 12 ", Gia:100, TrangThai:false}, 
    {SoGhe:13 ,TenGhe: " số 13 ", Gia:100, TrangThai:false}, 
    {SoGhe:14 ,TenGhe: " số 14 ", Gia:100, TrangThai:false}, 
    {SoGhe:15 ,TenGhe: " số 15 ", Gia:100, TrangThai:false}, 
    {SoGhe:16 ,TenGhe: " số 16 ", Gia:100, TrangThai:false}, 
    {SoGhe:17 ,TenGhe: " số 17 ", Gia:100, TrangThai:false}, 
    {SoGhe:18 ,TenGhe: " số 18 ", Gia:100, TrangThai:false}, 
    {SoGhe:19 ,TenGhe: " số 19 ", Gia:100, TrangThai:false}, 
    {SoGhe:20 ,TenGhe: " số 20 ", Gia:100, TrangThai:false}, 
    {SoGhe:21 ,TenGhe: " số 21 ", Gia:100, TrangThai:false}, 
    {SoGhe:22 ,TenGhe: " số 22 ", Gia:100, TrangThai:false}, 
    {SoGhe:23 ,TenGhe: " số 23 ", Gia:100, TrangThai:false}, 
    {SoGhe:24 ,TenGhe: " số 24 ", Gia:100, TrangThai:false}, 
    {SoGhe:25 ,TenGhe: " số 25 ", Gia:100, TrangThai:false}, 
    {SoGhe:26 ,TenGhe: " số 26 ", Gia:100, TrangThai:false}, 
    {SoGhe:27 ,TenGhe: " số 27 ", Gia:100, TrangThai:false}, 
    {SoGhe:28 ,TenGhe: " số 28 ", Gia:100, TrangThai:false}, 
    {SoGhe:29 ,TenGhe: " số 29 ", Gia:100, TrangThai:false}, 
    {SoGhe:30 ,TenGhe: " số 30 ", Gia:100, TrangThai:true}, 
    {SoGhe:31 ,TenGhe: " số 31 ", Gia:100, TrangThai:false},
    {SoGhe:32 ,TenGhe: " số 32 ", Gia:100, TrangThai:false}, 
    {SoGhe:33 ,TenGhe: " số 33 ", Gia:100, TrangThai:false}, 
    {SoGhe:34 ,TenGhe: " số 34 ", Gia:100, TrangThai:false}, 
    {SoGhe:35 ,TenGhe: " số 35 ", Gia:100, TrangThai:false},
    {SoGhe:36 ,TenGhe: " số 36 ", Gia:100, TrangThai:false},

  ]

  soGheDaDat: number = 0;
  soGheConLai:number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.soGheConLai = this.arrDSGhe.length;
    for(let ghe of this.arrDSGhe){
      if(!ghe.TrangThai){
        this.soGheConLai++;
      }
    }
  }

  DanhSachGheDangDat: any[]= [];

  //su kien dat ghe
  DatGheParent(status: any, ghe:any){
    if(status){
      this.soGheDaDat++;
      this.soGheConLai--;
      
      this.DanhSachGheDangDat.push(ghe);
    }else{
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.DanhSachGheDangDat){
        if(this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe){
          this.DanhSachGheDangDat.splice(parseInt(index),1)
        }
      }
    }
    console.log(this.DanhSachGheDangDat);
  }

  ThemGhe(gheDuocThem:any){
    this.arrDSGhe.push(gheDuocThem);

  }
}
  interface DSGhe {
    SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean
}
