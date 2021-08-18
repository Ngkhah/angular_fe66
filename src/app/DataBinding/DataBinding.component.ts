import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template:  `
        <div>
            <h1>1. Oneway binding</h1>
            <h3>+ Interpolation</h3>
            <p>{{title}}</p>
            <input value="{{title}}">
            <h3>+ Properties binding</h3>
            <div [innerHTML]="'Tiêu đê ' + title"></div>
            <input [value]="title">
            <h3>+ Event binding</h3> 
            <input #inputTitle /> <br>
            <button class="btn btn-outline-success" (click)="changeTitle(inputTitle.value)">Change Title</button>
            <h1>2. Twoway binding</h1>
            
            <input [(ngModel)]="title"> <hr>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quatity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td><input class="form-control" [(ngModel)]="product.quantity"/></td>
                        <th>{{product.price * product.quantity}}</th>
                        <th></th>
                    </tr>
                </tbody>
            </table>

            <hr>
            <h1>Bài Tập 1</h1>
           
            <div class="card">
                <div class="card-header bg-dark text-white">
                    Register form
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <p>Email:</p>
                    <input class="form-control"  [(ngModel)]="email">
                </div>
                
                <br>
                <div class="form-group">
                    <p>Fullname:</p>
                    <input class="form-control"  #inputFullname>
                </div>
                

                <button class="btn btn-success" (click)="changeName(inputFullname.value)">Submit</button>

                <h5>Email: {{email}}</h5>
                <h5>Full name: {{fullname}}</h5>

            </div>

        </div>
    `
})
// mô hình MVVM
export class DataBindingComponent implements OnInit {
    //tấ cả các dữ liệu hiển thị trên giao diện dều phải quản lý bởi thuộc tính của model
    title:string = 'hello khanh nguyen'
    arrProduct:Product []=[
        {id:'1',name:'Samsung Galaxy Z flip 3 128GB',price:2000,quantity:10},
        {id:'2',name:'Samsung Galaxy Z flip 3 256GB',price:2000,quantity:5},
        {id:'3',name:'Samsung Galaxy Z flip 3 1TB',price:2000,quantity:1},

    ]

    changeTitle = (newTitle:string) =>{
        this.title = newTitle;
    }
    email:string = "[(ngModel)] dùng twoway binding"
    fullname:string='event binding'
    changeName=(newFullName:string)=>{
        this.fullname = newFullName;
    }

    constructor() { }

    ngOnInit() { }
}
interface Product {
    id:string,
    name:string,
    price:number,
    quantity:number,
}