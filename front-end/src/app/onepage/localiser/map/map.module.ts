import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { LocaliserComponent } from '../localiser.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3GSGY9FqvOLror7N6dkOvHOpKqazaFz4',
    })
  ],
  declarations: [LocaliserComponent]
})


@NgModule({
  imports: [
      AgmCoreModule
  ],
  declarations: [
    LocaliserComponent
  ],
})
export class MapModule { }
