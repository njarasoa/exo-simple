import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Angular 21 standalone minimal</h1>
    <p>Composant App défini directement dans main.ts</p>
    <ul>
      @for (fruit of listeFruits(); track fruit) {
        <li>{{ fruit }}</li>
      }
    </ul>
  `
})
class AppComponent implements OnInit {


  // listeFruits = signal<string[]>(['🍎', '🍌', '🍓', '🍇']);
    listeFruits = signal<string[]>([]);

   ngOnInit(): void {
      fetch('http://localhost:3000/fruits/liste')
            .then(response => response.json())
            .then(json => this.listeFruits.set(json.listeFruits))
    }

}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
