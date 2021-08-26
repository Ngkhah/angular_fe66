import { PropsModule } from './Props/Props.module';
import { DirectiveModule } from './Directive/Directive.module';
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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent // các component trong module này (mỗi component sinh ra phải ở trong module)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule, FormsModule, HttpClientModule, PropsModule// nơi chèn module khác vào
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],// nơi chèn sever khác vào
  bootstrap: [AppComponent]// các component có thề sử dụng duoc95u trong file index.html
})
export class AppModule { }//module gốc ứng dụng
