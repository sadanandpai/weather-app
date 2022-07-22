import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, filter, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { City } from './interfaces/city-intf';
import { ApiService } from './services/api/api.service';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public loader = true;
  public error = '';

  public weatherForecast$ = this.storeService.selectedCity$.pipe(
    filter((data) => !!data),
    filter((city) => city!.nm !== ''),
    tap(() => (this.loader = true)),
    switchMap((city) => this.fetchWeatherForecast(city!)),
    map(([weather, forecast, error]) => ({ weather, forecast, error })),
    tap(({ weather }) => {
      if (weather) {
        this.loader = false;
        this.error = '';
      }
    })
  );

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  private fetchWeatherForecast(city: City) {
    return forkJoin([
      this.apiService.getWeather(city),
      this.apiService.getForecast(city),
    ]).pipe(
      catchError(() => {
        this.error = 'Something went wrong';
        this.loader = false;
        return of([null, null, true]);
      })
    );
  }
}
