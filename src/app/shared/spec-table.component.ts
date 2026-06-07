import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SpecRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

@Component({
  selector: 'app-spec-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="spec">
      <thead>
        <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of rows">
          <td><code>{{ r.name }}</code></td>
          <td><code class="spec__type">{{ r.type }}</code></td>
          <td><code class="spec__default">{{ r.default || '—' }}</code></td>
          <td>{{ r.description }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .spec { width: 100%; border-collapse: collapse; font-size: 14px; }
    .spec th, .spec td { text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--ibx-line); }
    .spec th { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ibx-ink-3); background: var(--ibx-surface-2); }
    .spec td code { font-size: 12.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .spec__type { color: var(--pds-accent); }
    .spec__default { color: var(--ibx-ink-3); }
  `],
})
export class SpecTableComponent {
  @Input() rows: SpecRow[] = [];
}
