import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
  declarations: [
    MenuComponent,
    ErrorsComponent
  ],
  exports: [
    MenuComponent,
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
