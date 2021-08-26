import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
    <hr>
        <div class="container">
            <h3 class="text-center">Demo Directive</h3>
            <h3>*ngif (dùng để xác định render or không render ra giao diện)</h3>
            <p *ngIf="status">Cyber soft</p>
            <button class="btn btn-success" (click)="anHien()">Ẩn / hiện</button>
            <hr>
            <h3 class="mt-5">Số chẳn lẻ</h3>
            <div class="form-group mt-2 mb-2">
                <input type="text" class="form-control" #num><br>
            <button class="btn btn-success" (click)="changeNumber(num.value)">Ok</button>
            

            </div>
            <h3>số: {{number}}</h3>
            <div *ngIf="number%2===0">Số chắn</div>
            <div *ngIf="number%2!==0">Số lẻ</div><br>
            <hr>
            <h3 class="mt-5">Ví dụ</h3>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="nav-item" *ngIf="islogin;else divlogin">
                            <a class="nav-link text-white">Xin chào bạn {{username}}</a>
                            <a class="nav-link text-white" (click)="logout()">Đăng xuất</a>

                        </div>
                        <ng-template #divlogin>
                    <div class="nav-item">
                        <a href="#" class="nav-link text-white" (click)="login()" >Đăng nhập</a>
                    </div>
        </ng-template>
                    </form>
                </div>
            </nav>


            <hr class="mt-5">
            <h3 class="mt-5">*ngSwichCase</h3>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" style="color: red;">Red</div>
                <div *ngSwitchCase="'green'" style="color: green;">green</div>
                <div *ngSwitchCase="'blue'" style="color: blue;">Blue</div>
                <div *ngSwitchDefault style="color: orange;">orange</div>
            </div>
            <select class="form-control" [(ngModel)]="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>

            </select>
            <hr class="mt-5">
            <h3 class="mt-5">*ngFor: Dùng  đề render các phần tử giống nhau trong giao diện</h3>
            <div class="row">

            
            <div class="col-4" *ngFor="let prod of arrSP">
                    <div class="card">
                        <img [src]="prod.img" class="w-100">
                        <div class="card-body">
                            <p>{{prod.name}}</p>
                            <p>{{prod.price.toLocaleString()}}</p>
                            <button class="btn btn-outline-success">Đặt hàng</button>

                        </div>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Hình Ảnh</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let prod of arrSP" [ngClass]="{'bg-dark':prod.id%2===0, 'bg-success':prod.id%2!==0}">
                        <td>{{prod.id}}</td>
                        <td><img [src]="prod.img" width="50" height="50"></td>
                        <td>{{prod.name}}</td>
                        <td>{{prod.price.toLocaleString()}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <hr>
            <h3>ngStyle</h3>
            <p [ngStyle]="{'font-size':fontSize + 'px'}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, saepe deserunt. Beatae dicta ea vel. Sint ea temporibus dicta itaque molestias, vitae molestiae expedita totam corrupti. Repellat accusamus tempore tempora?</p>
        <button class="btn btn-outline-danger mr-2" (click)="tangFont()">+</button>
        <button class="btn btn-outline-danger mr-2" (click)="giamFont()">-</button>

        </div>
        <hr class="mt-5 mb-5">
        <h3 class="text-center">Bài tập 5 (Login)</h3>
        <app-baitap5></app-baitap5>
        <hr class="mt-5 mb-5">
        <h3 class="text-center">Bài tập 6 (QLSP)</h3>

        <app-baitap6></app-baitap6>
        <hr>

        <div style="margin-bottom: 500px; height: 500px;">
            <h3>Directive Antd</h3>
            <button nz-button nzType="primary">
                <i nz-icon nzType="poweroff"></i>Click me
            </button><br>
            <button nz-button nzType="primary" nzSize="large" nzShape="round">
      <i nz-icon nzType="download"></i>
      Download
    </button>
        </div>

        <div style="margin-bottom: 500px; height: 500px;">
            <h3>Directive Me</h3>
            <button mat-raised-button color="accent">Accent</button><br>
            <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
        </div>

    `
})

export class DirectiveComponent implements OnInit {
    //Ví dụ ngStyle
    fontSize:number = 15;
    tangFont= ()=>{
        this.fontSize +=2;
    }
        
    giamFont= ()=>{
        this.fontSize -=2;
    }

    
    //ví dụ 
    islogin: boolean = false;
    username:string = 'khanhnguyen';
    status:boolean = true;
    number:number = 2;
    constructor() { }

    login = ()=> {
        this.islogin = true;
    }
    logout = ()=> {
        this.islogin = false;
    }

    changeNumber = (num:string) => {
        this.number = Number(num);
    }
    
    anHien = ()=> {
        this.status = !this.status;
    }
    // ví dụ ngSwichCase
        color:string = 'red';
    
    //ví dụ ngFor

    arrSP:any[]=[
        {id:1, name:'Táo mỹ', price: 500000, img:'https://picsum.photos/id/1/200/200'},
        {id:2, name:'Táo Nhật', price: 600000, img:'https://picsum.photos/id/2/200/200'},
        {id:3, name:'Táo đài loan', price: 700000, img:'https://picsum.photos/id/3/200/200'}

    ]
   

    ngOnInit() { }
}