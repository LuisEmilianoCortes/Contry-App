import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countrys.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  countries = input<RESTCountry[]>([]);


}
