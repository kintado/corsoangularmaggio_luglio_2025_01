import { Component, Input, signal, input } from '@angular/core';

@Component({
  selector: 'mycomp2',
  imports: [],
  templateUrl: './mycomp2.html',
  styleUrl: './mycomp2.css'
})
export class Mycomp2 {
  //@Input() bgcol: string = 'lightblue';
  bgcol = input<string>('lightblue');
}
