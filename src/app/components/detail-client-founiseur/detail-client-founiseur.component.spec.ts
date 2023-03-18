import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientFouniseurComponent } from './detail-client-founiseur.component';

describe('DetailClientFouniseurComponent', () => {
  let component: DetailClientFouniseurComponent;
  let fixture: ComponentFixture<DetailClientFouniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClientFouniseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClientFouniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
