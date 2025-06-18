import { Component, Input } from '@angular/core';

@Component({
  selector: 'mycomp',
  imports: [],
  templateUrl: './mycomp.html',
  styleUrl: './mycomp.css'
})
export class Mycomp {

  @Input() bgcol: string = 'lightblue';
}
