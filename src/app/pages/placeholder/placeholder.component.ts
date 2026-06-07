import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="ph" [style.--ph-accent]="data?.['accent']">
      <a routerLink="/" class="ph__back">← All systems</a>
      <div class="ph__card">
        <div class="ph__badge">{{ data?.['ds'] }}</div>
        <h1>{{ data?.['name'] }}</h1>
        <p>This section is scaffolded but not yet populated. We're starting with Pegasus end-to-end, then bringing this system online next.</p>
        <a routerLink="/pds" class="ph__cta">Explore Pegasus instead →</a>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background: var(--ibx-surface-2); }
    .ph { max-width: 720px; margin: 0 auto; padding: 80px 32px; }
    .ph__back { font-size: 14px; color: var(--ibx-ink-2); }
    .ph__card { margin-top: 32px; padding: 48px; background: #fff; border: 1px solid var(--ibx-line); border-radius: var(--r-lg); text-align: center; }
    .ph__badge { display: inline-block; padding: 6px 14px; border-radius: 100px; background: color-mix(in srgb, var(--ph-accent, var(--pds-accent)) 12%, transparent); color: var(--ph-accent, var(--pds-accent)); font-weight: 700; font-size: 13px; letter-spacing: 0.05em; }
    .ph__card h1 { margin-top: 16px; font-size: 36px; }
    .ph__card p { margin-top: 16px; }
    .ph__cta { display: inline-block; margin-top: 32px; padding: 12px 22px; background: var(--ibx-navy); color: #fff; border-radius: var(--r-sm); font-weight: 500; font-size: 14px; }
    .ph__cta:hover { text-decoration: none; background: var(--ibx-navy-dark); }
  `],
})
export class PlaceholderComponent {
  data: { [k: string]: any };
  constructor(route: ActivatedRoute) {
    this.data = route.snapshot.data;
  }
}
