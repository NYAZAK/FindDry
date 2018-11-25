import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule } from '@angular/material';


@NgModule({
  exports:[MatTabsModule,MatToolbarModule], 
})
export class MaterialModule { }
