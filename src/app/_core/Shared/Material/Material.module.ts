import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';

//chứa all module cua material va import và export tất cả module đó ra
@NgModule({
    imports: [MatButtonModule,MatIconModule,BrowserAnimationsModule],
    exports: [MatButtonModule,MatIconModule,BrowserAnimationsModule],
   
})
export class MaterialModule { }
