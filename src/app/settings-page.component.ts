import { Component } from '@angular/core';

// ...

@Component({
  selector: 'heavy-duty-dapp-settings-page',
  template: `
    <section>
      <h2 class="text-center text-3xl">Settings Page</h2>
      <p class="text-center">Welcome to the settings page!</p>
    </section>
  `,
  standalone: true
})
export class SettingsPageComponent {}
