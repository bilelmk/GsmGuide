import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainShortcutsPageRoutingModule } from './gsm-main-shortcuts-routing.module';

import { GsmMainShortcutsPage } from './gsm-main-shortcuts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainShortcutsPageRoutingModule
  ],
  declarations: [GsmMainShortcutsPage]
})
export class GsmMainShortcutsPageModule {}
