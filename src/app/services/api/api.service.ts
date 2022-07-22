import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/interfaces/city-intf';
import cities from 'src/assets/cities-fr.json';

const weather = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${environment.apiKey}&`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${environment.apiKey}&`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCities() {
    return of(cities);
  }

  getWeather(city: City) {
    return this.http.get(weather + 'q=' + city.nm);
  }

  getForecast(city: City) {
    return this.http.get(forecast + 'q=' + city.nm);
  }
}
