import $ from 'jquery';
import { treatmentsList } from './treatments-list';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Treatments</h2>')
    .append(treatmentsList())
    .append('<p>Lorem ipsum dolor sit amet...</p>');

  return fragment;
};

