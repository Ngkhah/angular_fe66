import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


// module này chứa tất cả module của meterial và export tất cả module đó ra

@NgModule({
    imports: [NzButtonModule,NzIconModule,NzTypographyModule],
    exports: [NzButtonModule,NzIconModule,NzTypographyModule],

})
export class AntdModule { }
