import { Route } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import CountryPageComponent from "./pages/country-page/country-page.component";


export const countryRoutes: Route[] = [

  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent
      },
      {
        path: 'by-region',
        component: ByRegionPageComponent
      },
      {
        path: 'country/:countryCode',
        // loadComponent: () => import('./pages/country-page/country-page.component')
        component: CountryPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
]

export default countryRoutes;
