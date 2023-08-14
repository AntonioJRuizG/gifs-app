import { Component, Input, OnInit } from '@angular/core';
import { GifsData } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css'],
})
export class GifCardComponent implements OnInit {
  @Input()
  public gif!: GifsData;

  // OnInit método parte del ciclo de vida de los componentes que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required.');
  }
}
