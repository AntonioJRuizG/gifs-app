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

  @Input()
  public imageWidth: string = '35';

  @Input()
  public imageHeigth: string = '35';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.imageUrl) throw new Error('Image url is RequiredValidator.');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
