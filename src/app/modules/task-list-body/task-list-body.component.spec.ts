import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListBodyComponent } from './task-list-body.component';

describe('TaskListBodyComponent', () => {
  let component: TaskListBodyComponent;
  let fixture: ComponentFixture<TaskListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
