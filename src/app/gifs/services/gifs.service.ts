import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsData, GifsResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'uaWMEr5jFUS7LD0Aek6kMmZUNFU6t30D';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: GifsData[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private apiEndPoint: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.readLocalStorage();
    this.searchTag(this._tagsHistory[0]);
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    if (!tag) return;

    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('gifs_history', JSON.stringify(this._tagsHistory));
  }

  private readLocalStorage(): void {
    if (!localStorage.getItem('gifs_history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('gifs_history')!);
  }

  searchTag(tag: string): void {
    if (tag && tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10)
      .set('offset', 0);

    this.http
      .get<GifsResponse>(`${this.apiEndPoint}/search`, { params })
      .subscribe((response) => {
        this.gifsList = response.data;
      });
  }
}
