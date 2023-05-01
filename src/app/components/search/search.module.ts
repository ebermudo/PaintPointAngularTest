import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { CardModule } from '../card/card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    IonicModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
