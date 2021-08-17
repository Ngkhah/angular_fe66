import { DataBindingModule } from './DataBinding/DataBinding.module';
import { LayoutFooterComponent } from './bai-tap-layout/layout-footer/layout-footer.component';
import { LayoutBodyRightComponent } from './bai-tap-layout/layout-body-right/layout-body-right.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { LayoutBodyLeftComponent } from './bai-tap-layout/layout-body-left/layout-body-left.component';
import { LayoutHeaderComponent } from './bai-tap-layout/layout-header/layout-header.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent // các component trong module này (mỗi component sinh ra phải ở trong module)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule// nơi chèn module khác vào
  ],
  providers: [],// nơi chèn sever khác vào
  bootstrap: [AppComponent]// các component có thề sử dụng duoc95u trong file index.html
})
export class AppModule { }//module gốc ứng dụng
