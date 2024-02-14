import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { MatAnchor } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, MatAnchor, HdWalletMultiButtonComponent],
  selector: 'heavy-duty-dapp-root',
  template: `
    <header class="px-16 pt-24 pb-8">
      <h1 class="text-center text-5xl mb-4">My Bank</h1>
      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
      <nav class="flex justify-center gap-4">
        <li>
          <a routerLink="/" mat-raised-button>Home</a>
        </li>
        <li>
          <a routerLink="/settings" mat-raised-button>Settings</a>
        </li>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
