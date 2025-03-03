import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentmatchesComponent } from './recentmatches.component';

describe('RecentmatchesComponent', () => {
  let component: RecentmatchesComponent;
  let fixture: ComponentFixture<RecentmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentmatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
