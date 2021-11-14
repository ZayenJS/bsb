export const WEBSITE_NAME = 'Brownskin Beauty';

export const mediaQueries = {
  'xsmall-width': matchMedia('(max-width: 576px)'),
  'small-width': matchMedia('(min-width: 576px)'),
  'medium-width': matchMedia('(min-width: 768px)'),
  'large-width': matchMedia('(min-width: 992px)'),
  'xlarge-width': matchMedia('(min-width: 1280px)'),
  'small-height': matchMedia('(max-height: 360px)'),
  'medium-height': matchMedia('(min-height: 410px)'),
  'large-height': matchMedia('(min-height: 768px)'),
  'xlarge-height': matchMedia('(min-height: 1024px)'),
};

export enum ErrorMessage {
  EMPTY_FIELD = 'Ce champs est requis.',
  INVALID_FIRSTNAME = 'Les chiffres et symboles sont interdits dans le prénom.',
  INVALID_LASTNAME = 'Les chiffres et symboles sont interdits dans le nom.',
}
