import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from 'src/app/interfaces/city-intf';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private city$ = new BehaviorSubject<City | null>(null);
  public selectedCity$ = this.city$.asObservable();

  setSelectedCity(city: City) {
    this.city$.next(city);
  }
}
