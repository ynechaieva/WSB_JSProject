import $ from 'jquery';
import { treatmentsList } from './treatments-list';

export const treatments = () => {
  const fragment = $(new DocumentFragment());
  const jumbotron = $(`
  <div class="jumbotron jumbotron-treatments">
   <div class="container">
      <h4> Treatments list </h4> 
      <p> Below you can select a treatment and add it to the cart. 
          Fill free to read a description and select treatment which apply to your needs
      </p>
    </div>
  </div>`
  );

  const tlist = $(`<div class='global-treatments-list'></div>`);
  tlist.append(treatmentsList);
  
  fragment.append(jumbotron).append(tlist);

  return fragment;
};

