import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PdsCardElevation = 'flat' | 'raised' | 'floating';

@Component({
  selector: 'pds-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pds-card" [class]="'pds-card--' + elevation">
      <div class="pds-card__header" *ngIf="title || subtitle">
        <h3 class="pds-card__title" *ngIf="title">{{ title }}</h3>
        <p class="pds-card__subtitle" *ngIf="subtitle">{{ subtitle }}</p>
      </div>
      <div class="pds-card__body">
        <ng-content />
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .pds-card {
      background: #fff;
      border-radius: var(--r-md);
      padding: 20px;
      transition: box-shadow 160ms ease, transform 160ms ease;
    }
    .pds-card--flat     { border: 1px solid var(--ibx-line); }
    .pds-card--raised   { box-shadow: var(--shadow-1); border: 1px solid var(--ibx-line); }
    .pds-card--floating { box-shadow: var(--shadow-2); }
    .pds-card__header { margin-bottom: 12px; }
    .pds-card__title { font-size: 16px; font-weight: 600; color: var(--ibx-ink); }
    .pds-card__subtitle { font-size: 13px; color: var(--ibx-ink-3); margin-top: 2px; }
    .pds-card__body { font-size: 14px; color: var(--ibx-ink-2); line-height: 1.55; }
  `],
})
export class PdsCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() elevation: PdsCardElevation = 'raised';
}
