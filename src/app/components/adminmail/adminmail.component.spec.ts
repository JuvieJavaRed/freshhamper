import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmailComponent } from './adminmail.component';

describe('AdminmailComponent', () => {
  let component: AdminmailComponent;
  let fixture: ComponentFixture<AdminmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
