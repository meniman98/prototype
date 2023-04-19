import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleFormComponent } from './dalle-form.component';

describe('DalleFormComponent', () => {
  let component: DalleFormComponent;
  let fixture: ComponentFixture<DalleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
