import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTicTacToeToggleComponent } from './super-tic-tac-toe-toggle.component';

describe('SuperTicTacToeToggleComponent', () => {
  let component: SuperTicTacToeToggleComponent;
  let fixture: ComponentFixture<SuperTicTacToeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperTicTacToeToggleComponent]
    });
    fixture = TestBed.createComponent(SuperTicTacToeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
