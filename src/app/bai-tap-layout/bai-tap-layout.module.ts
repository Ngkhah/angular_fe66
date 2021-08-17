import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './bai-tap-layout.component';
import { LayoutBodyLeftComponent } from './layout-body-left/layout-body-left.component';
import { LayoutBodyRightComponent } from './layout-body-right/layout-body-right.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';



@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        LayoutHeaderComponent,
        LayoutBodyLeftComponent,
        LayoutBodyRightComponent,
        LayoutFooterComponent,

    ],//khai cac coponet thong wa module
    imports: [],//gắn các module khác và  module
    exports: [BaiTapLayoutComponent],// trích xuất ra component hoc những thành phần khác cúa angular cho các người khác import vào sừ dụng
    providers: [], // nơi khai báo servers
})
export class BaiTapLayoutModule { }
