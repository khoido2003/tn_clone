import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailHeaderComponent } from './content-detail-header.component';

describe('ContentDetailHeaderComponent', () => {
  let component: ContentDetailHeaderComponent;
  let fixture: ComponentFixture<ContentDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDetailHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
