import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDiaryComponent } from './detail-diary.component';

describe('DetailDiaryComponent', () => {
  let component: DetailDiaryComponent;
  let fixture: ComponentFixture<DetailDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailDiaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
