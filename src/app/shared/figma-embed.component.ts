import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Live Figma embed via the official `/embed` endpoint.
 * Iframe re-renders on every Figma library publish, so the spec stays in
 * sync with the design source with no rebuild on our side.
 *
 *   <app-figma-embed
 *     [fileKey]="'ebsEG1FiXLoPMKk2VNNUHS'"
 *     [nodeId]="'1-17'"
 *     [height]="420"
 *     label="Button anatomy in Figma" />
 *
 * Notes:
 * - Anyone with view access to the file sees the live frame.
 * - Viewers without access see Figma's "sign in" interstitial.
 * - Figma respects file permissions, so this can't leak private content.
 */
@Component({
  selector: 'app-figma-embed',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fe">
      <iframe *ngIf="safeUrl"
              [src]="safeUrl"
              [style.height.px]="height"
              allowfullscreen
              loading="lazy"
              [attr.title]="label || 'Figma embed'"></iframe>
    </div>
  `,
  styles: [`
    .fe {
      background: var(--ibx-surface-2);
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      overflow: hidden;
    }
    .fe iframe {
      display: block;
      width: 100%;
      border: 0;
      background: transparent;
    }
  `],
})
export class FigmaEmbedComponent implements OnChanges {
  @Input() fileKey = '';
  @Input() nodeId = '';
  @Input() height = 380;
  @Input() label = '';

  safeUrl: SafeResourceUrl | null = null;
  rawUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(_c: SimpleChanges): void {
    if (!this.fileKey || !this.nodeId) {
      this.safeUrl = null;
      this.rawUrl = '';
      return;
    }
    const figmaUrl = `https://www.figma.com/design/${this.fileKey}/?node-id=${this.nodeId}`;
    this.rawUrl = figmaUrl;
    const embed = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }
}
