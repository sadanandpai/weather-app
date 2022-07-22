import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherComponent } from './today-weather.component';

describe('TodayWeatherComponent', () => {
  let component: TodayWeatherComponent;
  let fixture: ComponentFixture<TodayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
