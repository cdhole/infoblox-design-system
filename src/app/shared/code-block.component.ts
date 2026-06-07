import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cb">
      <div class="cb__head">
        <span class="cb__lang">{{ language }}</span>
        <button class="cb__copy" (click)="copy()">{{ copied ? 'Copied' : 'Copy' }}</button>
      </div>
      <pre class="cb__pre"><code>{{ code }}</code></pre>
    </div>
  `,
  styles: [`
    .cb { border: 1px solid var(--ibx-line); border-radius: var(--r-md); overflow: hidden; background: #0e1726; }
    .cb__head { display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: #0b1320; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .cb__lang { font-family: var(--ibx-mono); font-size: 12px; color: #8aa0c4; text-transform: uppercase; letter-spacing: 0.05em; }
    .cb__copy { background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #cfd8e6; padding: 4px 10px; border-radius: 4px; font-size: 12px; cursor: pointer; }
    .cb__copy:hover { background: rgba(255,255,255,0.06); }
    .cb__pre { margin: 0; padding: 16px 18px; color: #e2e8f0; font-size: 13px; line-height: 1.6; overflow-x: auto; }
  `],
})
export class CodeBlockComponent {
  @Input() code = '';
  @Input() language = 'html';
  copied = false;

  copy() {
    navigator.clipboard?.writeText(this.code);
    this.copied = true;
    setTimeout(() => (this.copied = false), 1500);
  }
}
