import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap5',
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <a class="navbar-brand" href="#">CycberSoft</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active" *ngIf="!isLogin"> 
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">Login <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active" *ngIf="isLogin"> 
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">Hello ! {{userName}} <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" *ngIf="isLogin"> 
                    <a class="nav-link" href="#">Đăng xuất<span class="sr-only">(current)</span></a>
                </li>
                
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
            

            <!-- Modal -->
            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                            <div class="modal-header">
                                    <h5 class="modal-title">Thông tin đăng nhập</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                            <div class="form-group">
                                    <p>Username</p>
                                    <input class="form-control" [(ngModel)]="userLogin.username">
                                </div>
                                <br>
                                <div class="form-group">
                                    <p>Password</p>
                                    <input class="form-control" [(ngModel)]="userLogin.password">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" (click)="login()" data-dismiss="modal" >Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <script>
                $('#exampleModal').on('show.bs.modal', event => {
                    var button = $(event.relatedTarget);
                    var modal = $(this);
                    // Use above variables to manipulate the DOM
                    
                });
            </script>
    
    `
})

export class BaiTapLoginComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        if(localStorage.getItem('userLogin')){
            this.userName = localStorage.getItem('userLogin')!;
            this.isLogin = true;

        }
    }

    userLogin:any ={
        userName:'',
        password:''
    }
    isLogin:boolean = false; 
    userName:string = 'cybersoft'

    login = ()=>{
        if(this.userLogin.username ==='cybersoft' && this.userLogin.password==='cybersoft'){
            this.userName = this.userLogin.username;
            this.isLogin = true;
            localStorage.setItem('userLogin',this.userLogin);
        }
    }
    

}