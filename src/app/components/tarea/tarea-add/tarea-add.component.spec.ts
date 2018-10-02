import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaAddComponent } from './tarea-add.component';

describe('TareaAddComponent', () => {
  let component: TareaAddComponent;
  let fixture: ComponentFixture<TareaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
