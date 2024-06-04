import { Component, ElementRef, ViewChild } from '@angular/core';

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

  searchTag() {
    const txtTagInput = this.txtTagInput.nativeElement.value;
    console.log({ txtTagInput });
  }
}
