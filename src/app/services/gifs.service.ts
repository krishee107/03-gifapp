import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeTagsHistory(tag);

  }
}
