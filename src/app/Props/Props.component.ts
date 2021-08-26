import { ProductListComponent } from './ProductList/ProductList.component';
import { ProductComponent } from './Product/Product.component';
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-demo-props',
    template: `
        <div class="container">
            <h3 style="font-weight:bold">@input:</h3>
            <app-product-list #tagProduct></app-product-list>
            <p id="theP" #tagP>Ahihi</p>
            <button (click)="ViewDom()">DOM</button>
            <div>
                <h3>Thông tin sản phẩm</h3>
                <div class="form-group">
                    <p>Id</p>
                    <input class="form-control" #id>
                </div>
                <div class="form-group">
                    <p>Name</p>
                    <input class="form-control" #name>
                </div>
                <div class="form-group">
                    <p>Price</p>
                    <input class="form-control" #price>
                </div>
                <div class="form-group">
                    <button class="btn btn-success"(click)="add_Product(id.value,name.value,price.value)">ADD PRODUCT</button>
                </div>
            </div>

        </div>
    `
})

export class PropsComponent implements OnInit {
    @ViewChild('tagP') tagP!:ElementRef;
    @ViewChild('tagProduct') tagProduct!:ProductListComponent;


    ViewDom(){
        // let theP = document.getElementById('theP');
        // console.log(theP?.innerHTML)
        this.tagP.nativeElement.innerHTML ='abc';
        console.log(this.tagProduct)
    }

    add_Product(id:string,name:string,price:string){
        let product:Product ={id:Number(id),name,price:Number(price),img:`https://picsum.photos/id/${id}/200/200`}
        //truy xuất tới thuộc tính product của tag <app-product-list>
        this.tagProduct.arrPro.push(product)

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