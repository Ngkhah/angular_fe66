import { MaterialModule } from './../../_core/Shared/Material/Material.module';
import { EditDSGheComponent } from './edit-dsghe/edit-dsghe.component';
import { GheComponent } from './ghe/ghe.component';
import { DsGheComponent } from './ds-ghe/ds-ghe.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [DsGheComponent,GheComponent,EditDSGheComponent],
    imports: [CommonModule,MaterialModule],
    exports: [DsGheComponent,GheComponent,EditDSGheComponent],
    providers: [],
})
export class QuanTriGheModule { }
