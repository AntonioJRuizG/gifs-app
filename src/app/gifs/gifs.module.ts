import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifsListComponent } from './components/items-list/items-list.component';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GifCardComponent,
    GifsListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
