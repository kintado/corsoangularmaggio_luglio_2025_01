import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
@Component({
  selector: 'app-root',
  imports: [Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'p02';
}
