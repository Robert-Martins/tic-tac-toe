import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

type Alignments = 'center' | 'space-between' | 'flex-start' | 'flex-end';

type Axis = 'column' | 'row';

@Component({
  selector: 'tic-tac-toeing-flex',
  template: `
    <div #ticTacToeingFlex class="tic-tac-toeing-flex">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./flex.component.scss'],
})
export class FlexComponent implements AfterViewInit {
  @ViewChild('ticTacToeingFlex')
  private ticTacToeingFlex: ElementRef<HTMLElement>;

  @Input()
  public mainAxis: Axis = 'row';

  @Input()
  public gap: string = '0';

  @Input()
  public justify: Alignments = 'flex-start';

  @Input()
  public align: Alignments = 'flex-start';

  ngAfterViewInit(): void {
    this.ticTacToeingFlex.nativeElement.style.flexDirection = this.mainAxis;
    if (!Number.isNaN(this.gap))
      this.ticTacToeingFlex.nativeElement.style.gap = `${this.gap}px`;
    this.ticTacToeingFlex.nativeElement.style.justifyContent = this.justify;
    this.ticTacToeingFlex.nativeElement.style.alignItems = this.align;
  }
}
