import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTicTacToeComponent } from './super-tic-tac-toe.component';

describe('SuperTicTacToeComponent', () => {
  let component: SuperTicTacToeComponent;
  let fixture: ComponentFixture<SuperTicTacToeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperTicTacToeComponent]
    });
    fixture = TestBed.createComponent(SuperTicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
