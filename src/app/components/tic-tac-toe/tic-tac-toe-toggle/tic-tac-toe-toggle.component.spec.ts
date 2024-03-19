import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeToggleComponent } from './tic-tac-toe-toggle.component';

describe('TicTacToeToggleComponent', () => {
  let component: TicTacToeToggleComponent;
  let fixture: ComponentFixture<TicTacToeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicTacToeToggleComponent]
    });
    fixture = TestBed.createComponent(TicTacToeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
