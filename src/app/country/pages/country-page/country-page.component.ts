import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'country-page',
  imports: [],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {

  countryCode = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['countryCode'] || ''),
    )
  )
}
