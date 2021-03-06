import type { TextTag } from './text-tag';

export type HtmlTag = Extract<
  keyof JSX.IntrinsicElements,
  | 'a'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'button'
  | 'div'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'header'
  | 'hr'
  | 'img'
  | 'input'
  | 'label'
  | 'legend'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'section'
  | 'table'
  | 'tbody'
  | 'td'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'tr'
  | 'ul'
  | TextTag
>;
