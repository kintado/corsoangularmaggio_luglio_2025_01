import { Component, signal, ViewChild, input, ElementRef, Input } from '@angular/core';
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
  coloreSfondo = "orange"; // Colore di sfondo del dashboard
  mycompbgcol: string = 'red';
  mycompbgcol2 = signal('lightblue');
  @ViewChild('area1') area1!: ElementRef<HTMLTextAreaElement>; // ! significa che l'elemento sarà presente al momento dell'esecuzione LO ASSICURIAMO NOI!
  @ViewChild('area2') area2!: ElementRef<HTMLTextAreaElement>; // ! significa che l'elemento sarà presente al momento dell'esecuzione LO ASSICURIAMO NOI!
  testoTextarea1: string = '';
  testoTextarea2: string = '';

  

  
  
  

  cambiacolore(event: any) {
    this.mycompbgcol = event.target.value;
  }

  cambiacolore2(event: any) {
    this.mycompbgcol2.set(event.target.value);
    
  }
  sparisciTextarea1() {
    this.area1.nativeElement.style.display = 'none';       
  }
  sparisciTextarea2() {
    this.area2.nativeElement.style.display = 'none';       
  }

  CambaiaColoreSfondo(col: string) {
    
    this.coloreSfondo = col;
  }

  setTestoTextarea1(testo: string) {
    this.testoTextarea1 = testo;
    // Imposta il valore della textarea1 con il testo ricevuto dal componente Mycomp
    this.area1.nativeElement.value = testo;
  }

  setTestoTextarea2(testo: string) {
    this.testoTextarea2 = testo;
    // Imposta il valore della textarea2 con il testo ricevuto dal componente Mycomp2
    this.area2.nativeElement.value = testo;
  }

  ngOnInit() {
    // Inizializza il colore di sfondo del dashboard
    //this.CambaiaColoreSfondo('yellow');
  }
}
