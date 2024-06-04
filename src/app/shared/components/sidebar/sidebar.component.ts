import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
    // if (this.gifsService.tagsHistory.length != 0) {
    //   this.gifsService.searchTag(gifsService.tagsHistory[0]);
    // }
  }


  getTagsHistory() {
    return this.gifsService.tagsHistory;
  }

  search(tag: string) {
    this.gifsService.searchTag(tag);
  }

}
