import { Component, OnInit, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ProductComponent } from '../Product/Product.component';

@Component({
    selector: 'app-product-list',
    template: `
    <div class="row">
        <div class="col-3" *ngFor="let product of arrPro">
        <app-product [product]="product" (eventXemchitiet)="xemChiTiet($event)"></app-product> 
        </div>
    </div>
    <br>

    <input type="text" #idSP class="form-control">
    <button class="mt-5" (click)="viewDetail(idSP.value)" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
    <br>

    <button class="mt-5" (click)="changePrice()">Change price  </button>
    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                            <h5 class="modal-title">Chi tiết sản phẩm</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <img [src]="productDetail.img" alt="">
                        <p>Tên Sản Phẩm: {{productDetail.name}}</p>
                        <p>Giá: {{productDetail.price}}</p>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    


        
    `
})

export class ProductListComponent implements OnInit {
    productDetail:Product = {id:1, name:'iphone 12 pro max', price:25000000,img:'https://picsum.photos/id/1/200/200'}
    product:Product = {
        id:1, name:'iphone 12 pro max', price:25000000,img:'https://picsum.photos/id/1/200/200'
    }
    arrPro:Product[] = [
        {id:1, name:'iphone 12 pro max', price:25000000,img:'https://picsum.photos/id/1/200/200'},
        {id:2, name:'Samsung Z Flip 3', price:24000000,img:'https://picsum.photos/id/2/200/200'},
        {id:3, name:'Samsung A frod 3', price:45000000,img:'https://picsum.photos/id/3/200/200'},
    ]
    xemChiTiet(dataOutputProduct:any){
        this.productDetail = dataOutputProduct;
    }

    //viewChildren: dom đến all  <app-product>
    @ViewChildren(ProductComponent) dsTagAppProduct!: QueryList<ProductComponent>
    changePrice(){
        this.dsTagAppProduct.forEach((tagProduct:ProductComponent,index) => {
            tagProduct.product.price *= 1.05;
        });
    }

    viewDetail(id:string){
       let tagClick:any = this.dsTagAppProduct.find((tagAppProduct:ProductComponent) => tagAppProduct.product.id ==Number(id));
        if(tagClick){
            tagClick.eventXemchitiet.emit(tagClick.product)
        }
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
