import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap6',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-white">Quản lý danh mục sản phẩm</div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã Sản phẩm</p>
                        <input class="form-control" [(ngModel)]="sanPham.maSP">
                    </div>
                    <div class="form-group">
                        <p>Tên Sản phẩm</p>
                        <input class="form-control" [(ngModel)]="sanPham.tenSP">
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control" [(ngModel)]="sanPham.gia">
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-success"(click)="themSP()">Thêm sản phẩm</button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr class="bg-dark text-white">
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let sanPham of mangSP">
                        <td>{{sanPham.maSP}}</td>
                        <td>{{sanPham.tenSP}}</td>
                        <td>{{sanPham.gia}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class BaiTapQLSPComponent implements OnInit {
    sanPham:SP = {maSP:'',tenSP:'',gia:0}
    mangSP:SP[]=[
        {maSP:'1',tenSP:'Phone 1', gia:100},
        {maSP:'2',tenSP:'Phone 2', gia:200},
        {maSP:'3',tenSP:'Phone 3', gia:300},

    ]
    constructor() { }

    ngOnInit() { }
    themSP = () =>{
        this.mangSP.push({...this.sanPham});
    }
}
interface SP{
    maSP:string, 
    tenSP:string,
    gia:number
}