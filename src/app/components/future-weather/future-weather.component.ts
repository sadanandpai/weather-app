import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FutureWeatherComponent {
  @Input() forecast;
  public forecastdata;

  ngOnChanges() {
    this.forecastdata = this.forecast.list
      .filter((_, i) => i % 8 === 0)
      .slice(1, 4)
      .map((item) => ({
        day: new Date(item.dt_txt).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        icon: item.weather[0].id,
        max: item.main.temp_max,
        min: item.main.temp_min,
      }));
  }
}
