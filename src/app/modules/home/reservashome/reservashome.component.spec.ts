import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservashomeComponent } from './reservashome.component';

describe('ReservashomeComponent', () => {
  let component: ReservashomeComponent;
  let fixture: ComponentFixture<ReservashomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservashomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
