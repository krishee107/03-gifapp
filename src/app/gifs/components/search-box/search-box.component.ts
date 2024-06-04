import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gif..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `,
})
export class ShearchBoxComponent {
  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const txtTagInput = this.txtTagInput.nativeElement.value;
    this.gifsService.searchTag(txtTagInput);
    this.txtTagInput.nativeElement.value = '';
  }
}
