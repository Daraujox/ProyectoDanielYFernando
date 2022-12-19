import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionhomeComponent } from './informacionhome.component';

describe('InformacionhomeComponent', () => {
  let component: InformacionhomeComponent;
  let fixture: ComponentFixture<InformacionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
