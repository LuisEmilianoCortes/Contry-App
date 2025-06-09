import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  searchValue = output<string>();
  placeholder = input<string>();

  onSearch(value: string) {
    this.searchValue.emit(value);
  }
}
