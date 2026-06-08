import { Routes } from '@angular/router';
import { PDS_ALL_SLUGS } from './pages/pds/pds-components';
import { ADS_ALL_SLUGS } from './pages/ads/ads-components';

// Slugs that have hand-authored rich pages (everything else uses the stub).
const PDS_RICH_SLUGS = new Set(['buttons', 'text-fields', 'color']);

const pdsStubRoutes = PDS_ALL_SLUGS
  .filter(slug => !PDS_RICH_SLUGS.has(slug))
  .map(slug => ({
    path: `components/${slug}`,
    loadComponent: () =>
      import('./pages/pds/components/stub-page.component').then(m => m.StubPageComponent),
  }));

const adsStubRoutes = ADS_ALL_SLUGS.map(slug => ({
  path: `components/${slug}`,
  loadComponent: () =>
    import('./pages/ads/components/ads-stub-page.component').then(m => m.AdsStubPageComponent),
}));



export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'pds',
    loadComponent: () =>
      import('./pages/pds/pds-shell.component').then(m => m.PdsShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/pds/pds-overview.component').then(m => m.PdsOverviewComponent),
      },
      // /pds/whats-new bookmarks land on overview, panel can be toggled from there.
      { path: 'whats-new', redirectTo: 'overview' },
      // Rich pages
      {
        path: 'components/buttons',
        loadComponent: () =>
          import('./pages/pds/components/button-page.component').then(m => m.ButtonPageComponent),
      },
      {
        path: 'components/text-fields',
        loadComponent: () =>
          import('./pages/pds/components/input-page.component').then(m => m.InputPageComponent),
      },
      {
        path: 'components/color',
        loadComponent: () =>
          import('./pages/pds/foundations/color-page.component').then(m => m.ColorPageComponent),
      },
      // Legacy URL redirects so any prior /pds/components/button or /input link still works
      { path: 'components/button', redirectTo: 'components/buttons' },
      { path: 'components/input',  redirectTo: 'components/text-fields' },
      // Everything else (Figma-mirrored slugs) → stub page
      ...pdsStubRoutes,
    ],
  },
  {
    path: 'ads',
    loadComponent: () =>
      import('./pages/ads/ads-shell.component').then(m => m.AdsShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/ads/ads-overview.component').then(m => m.AdsOverviewComponent),
      },
      ...adsStubRoutes,
    ],
  },
  {
    path: 'xds',
    loadComponent: () =>
      import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
    data: { ds: 'xDS', name: 'Axur Design System', accent: 'var(--xds-accent)' },
  },
  { path: '**', redirectTo: '' },
];
