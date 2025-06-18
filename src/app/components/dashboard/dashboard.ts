import { Component, signal } from '@angular/core';
import { Mycomp } from '../mycomp/mycomp';
import { Mycomp2 } from '../mycomp2/mycomp2'; // Assuming Mycomp2 is another component you want to use


@Component({
  selector: 'dashboard',
  imports: [Mycomp, Mycomp2],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
//  mycompbgcol: string = 'lightblue';
// con signal
  mycompbgcol: string = 'red';
  mycompbgcol2 = signal('lightblue');
  
  

  cambiacolore(event: any) {
    this.mycompbgcol = event.target.value;
  }

  cambiacolore2(event: any) {
    this.mycompbgcol2.set(event.target.value);
    
  }

}
