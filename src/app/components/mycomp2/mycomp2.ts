import { Component, Input, signal, input, ViewChild, output } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'mycomp2',
  imports: [],
  templateUrl: './mycomp2.html',
  styleUrl: './mycomp2.css'
})
export class Mycomp2 {
  //@Input() bgcol: string = 'lightblue';
  bgcol = input<string>('lightblue');
  ArrivaTesto = output<string>(); // Creiamo un signal per emettere il testo della textarea al componente padre
// ora output signal per emitter
  Inviafuoricolore = output<string>(); // Creiamo un signal per emettere il colore selezionato


  @ViewChild('miaselect') miaselect!:  ElementRef<HTMLSelectElement>; // Ottieni il riferimento all'elemento select
  @ViewChild('textarea2') textarea2!: ElementRef<HTMLTextAreaElement>; // Ottieni il riferimento all'elemento textarea
  inviafuoricolore(){
    let sel = this.miaselect.nativeElement; // Ottieni il riferimento all'elemento select
    let col = sel.value; // Recuperiamo il valore selezionato dall'elemento select... il colore selezionato.
    this.Inviafuoricolore.emit(col); // Ora lo emettiamo!
    
  }

  inviatestofuori()
  {
    const textarea = this.textarea2.nativeElement; // Ottieni il riferimento all'elemento select
    const testo = textarea.value; // Recuperiamo il valore della textarea
    this.ArrivaTesto.emit(testo); // Ora lo emettiamo!
    textarea.value = ''; // Pulisci la textarea dopo l'invio
  }
}
