import { Component, Input } from '@angular/core';
import { GifsData } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-list',
  templateUrl: './items-list.component.html',
})
export class GifsListComponent {
  @Input()
  public gifs: GifsData[] = [];
}
