import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsListComponent } from './components/items-list/items-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, GifsListComponent, GifCardComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
