import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloshomeComponent } from './articuloshome.component';

describe('ArticuloshomeComponent', () => {
  let component: ArticuloshomeComponent;
  let fixture: ComponentFixture<ArticuloshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
