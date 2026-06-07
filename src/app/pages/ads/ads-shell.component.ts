import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ADS_SECTIONS, AdsSection } from './ads-components';

@Component({
  selector: 'app-ads-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="ads-shell">
      <header class="ads-top">
        <div class="ads-top__brand">
          <a routerLink="/" class="ads-top__logo" aria-label="Infoblox home">
            <img src="infoblox-logo.svg" alt="Infoblox" />
          </a>
          <span class="ads-top__divider"></span>
          <a routerLink="/ads" class="ads-top__product">
            <span class="ads-top__mark">A</span>
            <span>Aurora</span>
          </a>
        </div>
        <nav class="ds-switch" aria-label="Switch design system">
          <a routerLink="/pds" class="ds-chip ds-chip--pds">
            <span class="ds-chip__dot"></span>
            <span>Pegasus</span>
          </a>
          <a routerLink="/xds" class="ds-chip ds-chip--xds">
            <span class="ds-chip__dot"></span>
            <span>Axur</span>
          </a>
        </nav>
      </header>

      <div class="ads-body">
        <aside class="ads-nav">
          <input class="ads-nav__search" placeholder="Search components…" />

          <a routerLink="/ads/overview"
             routerLinkActive="active"
             class="ads-nav__item ads-nav__item--top">
            Overview
          </a>

          <div class="ads-nav__sections">
            <details *ngFor="let section of sections"
                     class="ads-nav__section"
                     [open]="expanded[section.id]"
                     (toggle)="onToggle(section.id, $event)">
              <summary class="ads-nav__group">
                <span class="ads-nav__chev" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
                <span class="ads-nav__group-label">{{ section.title }}</span>
                <span class="ads-nav__count">{{ section.components.length }}</span>
              </summary>
              <div class="ads-nav__items">
                <a *ngFor="let item of section.components"
                   [routerLink]="'/ads/components/' + item.slug"
                   routerLinkActive="active"
                   class="ads-nav__item">
                  {{ item.name }}
                  <span *ngIf="item.status === '🚧'" class="ads-nav__status">🚧</span>
                </a>
                <div *ngIf="section.components.length === 0" class="ads-nav__empty">No items yet</div>
              </div>
            </details>
          </div>
        </aside>

        <main class="ads-main">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background: var(--ibx-surface-2); --pds-accent: var(--ads-accent); }
    .ads-shell { display: flex; flex-direction: column; min-height: 100vh; }
    .ads-top {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 24px;
      background: linear-gradient(180deg, #fafbfd 0%, #f6f8fb 100%);
      border-bottom: 1px solid var(--ibx-line);
      box-shadow: 0 2px 8px -4px rgba(11, 26, 43, 0.08);
      position: sticky; top: 0; z-index: 10;
    }
    .ads-top__brand { display: flex; align-items: center; gap: 14px; }
    .ads-top__logo { display: flex; align-items: center; text-decoration: none; }
    .ads-top__logo img { height: 22px; width: auto; display: block; }
    .ads-top__divider { width: 1px; height: 20px; background: var(--ibx-line); }
    .ads-top__product { display: flex; align-items: center; gap: 10px; color: var(--ibx-ink); font-weight: 600; font-size: 15px; text-decoration: none; }
    .ads-top__product:hover { text-decoration: none; }
    .ads-top__mark { width: 24px; height: 24px; background: var(--ads-accent); color: #fff; display: inline-flex; align-items: center; justify-content: center; border-radius: 5px; font-weight: 700; font-size: 13px; }

    /* DS switcher chips */
    .ds-switch { display: flex; gap: 8px; margin-left: auto; }
    .ds-chip {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 5px 11px 5px 9px;
      border-radius: 100px;
      font-size: 12.5px; font-weight: 500;
      color: var(--ibx-ink-2);
      background: var(--ibx-surface-2);
      border: 1px solid var(--ibx-line);
      text-decoration: none;
      transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
    }
    .ds-chip:hover { background: #fff; border-color: var(--ibx-ink-3); color: var(--ibx-ink); text-decoration: none; }
    .ds-chip__dot { width: 8px; height: 8px; border-radius: 100px; }
    .ds-chip--pds .ds-chip__dot { background: #0070d2; }
    .ds-chip--ads .ds-chip__dot { background: #0099d2; }
    .ds-chip--xds .ds-chip__dot { background: #f47c20; }

    .ads-body { flex: 1; display: grid; grid-template-columns: 240px 1fr; }
    .ads-nav { background: #fff; border-right: 1px solid var(--ibx-line); padding: 20px 12px; position: sticky; top: 53px; height: calc(100vh - 53px); overflow-y: auto; }
    .ads-nav__search { width: 100%; padding: 7px 10px; font-size: 13px; border: 1px solid var(--ibx-line); border-radius: 6px; margin-bottom: 14px; font-family: var(--ibx-font); }
    .ads-nav__search:focus { outline: none; border-color: var(--ads-accent); }

    /* Overview pill */
    .ads-nav__item--top {
      position: relative;
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 14px;
      padding: 9px 12px;
      border: none;
      border-radius: 8px;
      font-size: 13.5px; font-weight: 500;
      color: var(--ibx-ink-2); text-decoration: none;
      background: transparent;
      transition: background 120ms ease, color 120ms ease;
    }
    .ads-nav__item--top::before { content: none !important; }
    .ads-nav__item--top::after {
      content: '→';
      margin-left: auto;
      color: var(--ibx-ink-3);
      font-size: 13px;
      opacity: 0;
      transform: translateX(-4px);
      transition: opacity 160ms ease, transform 160ms ease;
    }
    .ads-nav__item--top:hover { background: var(--ibx-surface-2); color: var(--ibx-ink); text-decoration: none; }
    .ads-nav__item--top:hover::after { opacity: 1; transform: translateX(0); }
    .ads-nav__item--top.active {
      background: transparent;
      color: var(--ibx-ink);
      font-weight: 600;
      padding-left: 9px;
      box-shadow: inset 3px 0 0 var(--ads-accent);
    }
    .ads-nav__item--top.active::after { opacity: 0; }

    /* Accordion sections */
    .ads-nav__sections { display: flex; flex-direction: column; gap: 2px; }
    .ads-nav__section { border-radius: 8px; overflow: hidden; transition: background 120ms ease; }
    .ads-nav__section[open] { background: var(--ibx-surface-2); }
    .ads-nav__section + .ads-nav__section { margin-top: 4px; }

    summary.ads-nav__group {
      display: flex; align-items: center; gap: 8px;
      list-style: none;
      cursor: pointer;
      user-select: none;
      padding: 9px 10px;
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.06em;
      color: var(--ibx-ink-2);
      border-radius: 8px;
      transition: color 120ms ease, background 120ms ease;
    }
    summary.ads-nav__group::-webkit-details-marker { display: none; }
    summary.ads-nav__group:hover { color: var(--ibx-ink); }
    .ads-nav__section[open] summary.ads-nav__group { color: var(--ibx-ink); }

    .ads-nav__chev {
      width: 14px; height: 14px;
      display: inline-flex; align-items: center; justify-content: center;
      color: var(--ibx-ink-3);
      transition: transform 180ms ease;
    }
    .ads-nav__section[open] .ads-nav__chev { transform: rotate(90deg); color: var(--ads-accent); }

    .ads-nav__group-label { flex: 1; }
    .ads-nav__count {
      font-family: var(--ibx-mono);
      font-size: 10px; font-weight: 600;
      color: var(--ibx-ink-3);
      background: #fff;
      border: 1px solid var(--ibx-line);
      padding: 1px 6px;
      border-radius: 100px;
      letter-spacing: 0;
    }
    .ads-nav__section[open] .ads-nav__count { background: var(--ibx-surface-3); }

    .ads-nav__items { padding: 2px 6px 8px; display: flex; flex-direction: column; gap: 1px; }
    .ads-nav__item {
      display: flex; align-items: center; gap: 6px;
      padding: 6px 12px 6px 28px; font-size: 13.5px;
      color: var(--ibx-ink-2); border-radius: 6px;
      text-decoration: none; position: relative;
    }
    .ads-nav__item:hover { background: rgba(255,255,255,0.7); color: var(--ibx-ink); text-decoration: none; }
    .ads-nav__item.active {
      background: rgba(0,153,210,0.12); color: var(--ads-accent); font-weight: 500;
    }
    .ads-nav__item.active::before {
      content: ''; position: absolute; left: 16px; top: 50%;
      width: 4px; height: 4px; border-radius: 100px;
      background: var(--ads-accent);
      transform: translateY(-50%);
    }
    .ads-nav__status { font-size: 10px; opacity: 0.7; }
    .ads-nav__empty { font-size: 12px; color: var(--ibx-ink-3); font-style: italic; padding: 4px 12px 4px 28px; }

    .ads-main {
      padding: 32px clamp(24px, 3.5vw, 64px);
      min-width: 0;
    }
  `],
})
export class AdsShellComponent implements OnInit, OnDestroy {
  sections: AdsSection[] = ADS_SECTIONS;
  expanded: Record<string, boolean> = {};
  private sub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.sections.forEach(s => (this.expanded[s.id] = true));
    this.applyFromUrl(this.router.url);
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => this.applyFromUrl(e.urlAfterRedirects));
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  onToggle(id: string, evt: Event) {
    const el = evt.target as HTMLDetailsElement;
    this.expanded[id] = el.open;
  }

  private applyFromUrl(url: string) {
    const m = url.match(/\/ads\/components\/([^/?#]+)/);
    if (!m) return;
    const slug = m[1];
    const active = this.sections.find(s => s.components.some(c => c.slug === slug));
    if (!active) return;
    this.sections.forEach(s => (this.expanded[s.id] = s.id === active.id));
  }
}
