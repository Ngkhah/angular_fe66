import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card">
            <img src='{{product.img}}'alt="" class="w-full">
            <div class="card-body">
                <p>Name: {{product.name}}</p>
                <p>Price: {{product.price}}</p>

                <button data-toggle="modal" data-target="#modelId" class="btn btn-outline-danger" (click)="xemChiTiet()">Xem chi tiết</button>
                <!-- B1 tạo sự kiện click tại component con -->
            </div> 
        </div>
    `
})

export class ProductComponent implements OnInit {

    @Input() product!:Product


    //@Output
    //...
    //B1 tạo sự kiện click tại component con => mục đích của sự kiện gửi ngược giữ liệu về component cha
    //...
    //B2 định danh thuộc tính output là một thuộc tính mới để dóng gói dữ liệu (new EventEmitter)
    //...
    //B3 Viết hàm sự kiện đóng gói dữ liệu xemChiTiet()
    //...
    //B4 ở component cha gọi thuộc tính output được dịnh danh ỡ B2 (eventXemchitiet)="xemChiTiet($event)"
    //...
    //B5 ở Export component cha viet lại hàm xemChiTiet(dataOutputProduct:any)
    //ánh xạ : this.productDetail = dataOutputProduct;


    //thuộc tính này dùng để đưa dữ liệu ra component cha
    @Output() eventXemchitiet = new EventEmitter();
    xemChiTiet(){
        this.eventXemchitiet.emit(this.product)
    }

    constructor() { }

    ngOnInit() { }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}