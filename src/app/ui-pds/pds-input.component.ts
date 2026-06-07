import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PdsInputState = 'default' | 'error' | 'success';

@Component({
  selector: 'pds-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="pds-input-wrap">
      <span class="pds-input-label" *ngIf="label">{{ label }}</span>
      <input
        class="pds-input"
        [class.pds-input--error]="state === 'error'"
        [class.pds-input--success]="state === 'success'"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [value]="value" />
      <span class="pds-input-help" *ngIf="helpText"
            [class.pds-input-help--error]="state === 'error'">{{ helpText }}</span>
    </label>
  `,
  styles: [`
    :host { display: block; }
    .pds-input-wrap { display: flex; flex-direction: column; gap: 6px; font-family: var(--ibx-font); }
    .pds-input-label { font-size: 13px; font-weight: 500; color: var(--ibx-ink); }
    .pds-input {
      font-family: var(--ibx-font);
      font-size: 14px;
      padding: 8px 12px;
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-sm);
      background: #fff;
      color: var(--ibx-ink);
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }
    .pds-input:focus { outline: none; border-color: var(--pds-accent); box-shadow: 0 0 0 3px rgba(0,112,210,0.18); }
    .pds-input:disabled { background: var(--ibx-surface-2); cursor: not-allowed; }
    .pds-input--error { border-color: var(--ibx-red); }
    .pds-input--error:focus { box-shadow: 0 0 0 3px rgba(211,47,47,0.18); }
    .pds-input--success { border-color: #2e8b57; }
    .pds-input-help { font-size: 12px; color: var(--ibx-ink-3); }
    .pds-input-help--error { color: var(--ibx-red); }
  `],
})
export class PdsInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() helpText = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() disabled = false;
  @Input() state: PdsInputState = 'default';
}
