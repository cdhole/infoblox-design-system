import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PdsButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type PdsButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'pds-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="'pds-btn pds-btn--' + variant + ' pds-btn--' + size"
      [disabled]="disabled">
      <ng-content />
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
    .pds-btn {
      font-family: var(--ibx-font);
      font-weight: 500;
      border-radius: var(--r-sm);
      border: 1px solid transparent;
      cursor: pointer;
      transition: background 120ms ease, border-color 120ms ease, color 120ms ease, box-shadow 120ms ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .pds-btn:focus-visible { outline: 2px solid var(--pds-accent); outline-offset: 2px; }
    .pds-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .pds-btn--sm { padding: 6px 12px; font-size: 13px; }
    .pds-btn--md { padding: 8px 16px; font-size: 14px; }
    .pds-btn--lg { padding: 12px 20px; font-size: 15px; }

    .pds-btn--primary   { background: var(--pds-accent); color: #fff; }
    .pds-btn--primary:hover:not(:disabled)   { background: #005bb0; }
    .pds-btn--secondary { background: #fff; color: var(--pds-accent); border-color: var(--pds-accent); }
    .pds-btn--secondary:hover:not(:disabled) { background: rgba(0,112,210,0.06); }
    .pds-btn--tertiary  { background: transparent; color: var(--pds-accent); }
    .pds-btn--tertiary:hover:not(:disabled)  { background: rgba(0,112,210,0.06); }
    .pds-btn--danger    { background: var(--ibx-red); color: #fff; }
    .pds-btn--danger:hover:not(:disabled)    { background: #b71c1c; }
  `],
})
export class PdsButtonComponent {
  @Input() variant: PdsButtonVariant = 'primary';
  @Input() size: PdsButtonSize = 'md';
  @Input() disabled = false;
}
