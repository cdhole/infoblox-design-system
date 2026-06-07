import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TocItem { id: string; label: string; }

@Component({
  selector: 'app-page-toc',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="toc" aria-label="On this page">
      <div class="toc__title">On this page</div>
      <ul class="toc__list">
        <li *ngFor="let item of items">
          <a [href]="'#' + item.id"
             class="toc__link"
             [class.active]="activeId === item.id"
             (click)="onClick($event, item.id)">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .toc {
      position: sticky; top: 80px;
      padding: 18px 16px;
      background: linear-gradient(180deg, #fafbfd 0%, #f3f6fa 100%);
      border: 1px solid var(--ibx-line);
      border-radius: 12px;
      box-shadow: 0 2px 8px -4px rgba(11, 26, 43, 0.06);
      font-family: var(--ibx-font);
    }
    .toc__title {
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--ibx-ink-3);
      margin: 0 0 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--ibx-line);
    }
    .toc__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1px; }
    .toc__link {
      display: block; padding: 6px 10px 6px 12px; font-size: 13px; color: var(--ibx-ink-3);
      text-decoration: none;
      border-left: 2px solid transparent;
      border-radius: 0 6px 6px 0;
      margin-left: -2px;
      transition: color 120ms ease, border-color 120ms ease, background 120ms ease;
    }
    .toc__link:hover { color: var(--ibx-ink); background: rgba(255,255,255,0.7); text-decoration: none; }
    .toc__link.active {
      color: var(--pds-accent);
      border-left-color: var(--pds-accent);
      background: #fff;
      font-weight: 500;
    }
  `],
})
export class PageTocComponent implements OnInit, OnDestroy {
  @Input() items: TocItem[] = [];
  activeId = '';
  private observer?: IntersectionObserver;

  ngOnInit() {
    setTimeout(() => this.setup(), 0);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setup() {
    const sections = this.items
      .map(i => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    this.observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) this.activeId = visible[0].target.id;
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 },
    );
    sections.forEach(s => this.observer!.observe(s));
    this.activeId = this.items[0]?.id || '';
  }

  onClick(e: MouseEvent, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeId = id;
      history.replaceState(null, '', '#' + id);
    }
  }
}
