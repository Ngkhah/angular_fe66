import { CommonModule } from '@angular/common';
import { ProductListComponent } from './ProductList/ProductList.component';
import { ProductComponent } from './Product/Product.component';
import { PropsComponent } from './Props.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [PropsComponent,ProductComponent,ProductListComponent],
    imports: [CommonModule],
    exports: [PropsComponent],
})
export class PropsModule { }
