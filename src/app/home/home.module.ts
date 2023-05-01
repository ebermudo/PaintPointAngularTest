import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GridModule } from '../components/grid/grid.module';
import { SearchModule } from '../components/search/search.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchModule,
    GridModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
