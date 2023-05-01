import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GridComponent } from './grid.component';
import { CardModule } from '../card/card.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from '../modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    NgxPaginationModule,
    ModalModule,
    IonicModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule {}
