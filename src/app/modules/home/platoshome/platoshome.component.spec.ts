import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoshomeComponent } from './platoshome.component';

describe('PlatoshomeComponent', () => {
  let component: PlatoshomeComponent;
  let fixture: ComponentFixture<PlatoshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatoshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatoshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
