import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'heavy-duty-dapp-root',
  template: `
    <header>
     <h1>Hola, soy renft.</h1>
    </header>
    `,
})
export class AppComponent {}
