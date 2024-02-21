import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';

@Component({
  selector: 'heavy-duty-dapp-balance-page',
  template: `
    <div class="flex justify-center gap-4">
      <heavy-duty-dapp-balance-section></heavy-duty-dapp-balance-section>

      <heavy-duty-dapp-transactions-section></heavy-duty-dapp-transactions-section>
    </div>
  `,
  standalone: true,
  imports: [BalanceSectionComponent, TransactionsSectionComponent],
})
export class BalancePageComponent {}