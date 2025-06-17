
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countrys.interface';

const URL_REST_COUNTRIES = 'https://restcountries.com';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(capital: string) {
    const query = capital.toLowerCase();
    return this.http.get<RESTCountry[]>(`${URL_REST_COUNTRIES}/v3.1/capital/${query}`);

  }

}
