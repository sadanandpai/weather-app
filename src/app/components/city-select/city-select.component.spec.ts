import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySelectComponent } from './city-select.component';

describe('CitySelectComponent', () => {
  let component: CitySelectComponent;
  let fixture: ComponentFixture<CitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
