import { BaiTapQLSPComponent } from './BaiTap6.component';
import { BaiTapLoginComponent } from './BaiTap5.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveComponent } from './Directive.component';
import { AntdModule } from '../_core/Shared/Antd/Antd.module';

// import { NameComponent } from './name.component';

@NgModule({
    declarations: [DirectiveComponent,BaiTapLoginComponent,BaiTapQLSPComponent],//điền component vào
    imports: [CommonModule,FormsModule,AntdModule],//import commonmodule de su dung directive
    exports: [DirectiveComponent,BaiTapLoginComponent,BaiTapQLSPComponent],//điền component vào
})
export class DirectiveModule { }
