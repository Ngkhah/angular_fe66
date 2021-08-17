import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';


@NgModule({
    declarations: [DataBindingComponent],
    imports: [FormsModule,CommonModule],
    exports: [DataBindingComponent],
    providers: [],
})
export class DataBindingModule { }
