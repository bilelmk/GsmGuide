import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    MenuComponent,
    ErrorsComponent,
    SliderComponent
  ],
  exports: [
    MenuComponent,
    ErrorsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule {}
