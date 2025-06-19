import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mycomp',
  imports: [],
  templateUrl: './mycomp.html',
  styleUrl: './mycomp.css'
})
/*
Piccolo promemoria sugli ElementRef:
ElementRef è una classe di Angular che fornisce un modo per accedere direttamente agli elementi del DOM.
Quando si utilizza ElementRef, si ottiene un riferimento all'elemento DOM reale, che può essere utile per manipolare direttamente l'elemento, ad esempio per leggere o modificare le proprietà dell'elemento.
Tuttavia, è importante usare ElementRef con cautela, poiché l'accesso diretto al DOM può portare a problemi di sicurezza e prestazioni se non gestito correttamente.
Possiamo poi dettagliare meglio ElemntRef indicando il tipo di elemento HTML a cui ci riferiamo, ad esempio ElementRef<HTMLSelectElement> per un elemento select.
TIPI:
HTMLInputElement: per input di tipo testo, checkbox, radio, etc.
HTMLSelectElement: per elementi select (dropdown).
HTMLTextAreaElement: per elementi textarea.
HTMLButtonElement: per pulsanti.
HTMLDivElement: per div e altri elementi di blocco.
HTMLSpanElement: per elementi inline come span.
POI c'è la documentazione ufficiale di Angular:
https://angular.io/api/core/ElementRef
https://angular.io/guide/template-syntax#elementref
*/ 

export class Mycomp {
  @ViewChild('miaselect') miaselect!: ElementRef<HTMLSelectElement>; // ! significa che l'elemento sarà presente al momento
  @ViewChild('textarea1') textarea1!: ElementRef<HTMLTextAreaElement>; // ! significa che l'elemento sarà presente al momento dell'esecuzione LO ASSICURIAMO NOI!
  @Input() bgcol: string = 'lightblue';
  @Output() ArrivaTesto = new EventEmitter<string>();
  @Input() ComponentePadre!: any; // Assicurati di importare il tipo corretto per il componente padre
 


  /*
  UNO DEI METODI PER INIVIARE un valore ad un componente padre è l'uso di EventEmitter...
  EventEmitter è un emettitore di EVENTI, come (click), (hover), (change), etc.
  SOLO CHE LO HAI CREATO TU!
  Tu qui crei un oggetto chiamato ColoraEsterno così
  @Output() ColoraEsterno = new EventEmitter<string>();
  e nell'elemento padre SU QUESTO ELEMENTO esiste ora un evento chiamatro ColoraEsterno
  QUindi su questo elemento padre puoi scrivere
  <mycomp (ColoraEsterno)="CambiaColore($event)"></mycomp>
  dove CambiaColore è un metodo del componente padre che riceve l'evento e il valore emesso. e $event contiene il valore emesso da te qui!
  */
  
  @Output() ColoraEsterno = new EventEmitter<string>();

  ColoraEsternoButtonClick() {
    let mysel = this.miaselect.nativeElement; // Ottieni il riferimento all'elemento select. 
    // nativeElement è il riferimento all'elemento DOM reale. E' quello che otterresti con document.querySelector('miaselect') in JavaScript puro.

    let col = mysel.value; // Recuperiamo il valore selezionato dall'elemento select... il colore selezionato.
    this.ColoraEsterno.emit(col); //Ora lo emittiamo!
  
  }


  
  inviatestofuori(){
    // Invia il testo della textarea1 al componente padre
    const textarea = this.textarea1.nativeElement; // Ottieni il riferimento all'elemento select
    const testo = textarea.value; // Recuperiamo il valore della textarea
   // alert(testo); // Mostra il testo in un alert (o puoi fare qualsiasi altra cosa con esso)
    this.ArrivaTesto.emit(testo); // Ora lo emettiamo!
    textarea.value = ''; // Pulisci la textarea dopo l'invio
    
  }


  sballapapa() {
    // Emettiamo un evento per il componente padre
    this.ComponentePadre.setTestoTextarea1('Sballa papa\'');
  }
}
