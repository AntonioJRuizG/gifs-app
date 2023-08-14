import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public imageUrl!: string;

  @Input()
  public imageTitle: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.imageUrl) throw new Error('Image url is RequiredValidator.');
  }

  onLoad() {
    console.log('image loaded');
    this.hasLoaded = true;
  }
}
