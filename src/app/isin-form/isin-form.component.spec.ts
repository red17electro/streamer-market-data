import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsinFormComponent } from './isin-form.component';

describe('IsinFormComponent', () => {
  let component: IsinFormComponent;
  let fixture: ComponentFixture<IsinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
