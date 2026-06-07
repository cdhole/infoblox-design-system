// Aurora Design System package metadata.
//
// Inferred from the Storybook URL pattern:
//   https://super-adventure-y72g1eq.pages.github.io/core/?path=/docs/core-adjustable-text-box--docs
//
// The library is internally called "core" and components use the `core-` selector prefix.
// Update the constants below when the published package name and import path are confirmed.

export const ADS_PACKAGE = {
  // npm package name (PLACEHOLDER — confirm with the ADS team)
  name: '@infoblox/core',

  // Angular standalone component prefix used in templates
  selectorPrefix: 'core-',

  // Storybook root for deep-linking individual components
  storybookBase: 'https://super-adventure-y72g1eq.pages.github.io/core/?path=/docs/',
};

/** Convert a slug like "adjustable-text-box" -> "core-adjustable-text-box". */
export function adsSelector(slug: string): string {
  return ADS_PACKAGE.selectorPrefix + slug;
}

/** Convert a slug to its PascalCase Angular class name, e.g. "adjustable-text-box" -> "CoreAdjustableTextBox". */
export function adsClassName(slug: string): string {
  const pascal = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  return 'Core' + pascal;
}

/** Storybook deep-link for a component slug. */
export function adsStorybookUrl(slug: string): string {
  return `${ADS_PACKAGE.storybookBase}core-${slug}--docs`;
}
