import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTitleComponent } from './main-title.component';

describe('MainTitleComponent', () => {
  let component: MainTitleComponent;
  let fixture: ComponentFixture<MainTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
