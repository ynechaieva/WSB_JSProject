import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';

const cart = new Cart();


export const treatmentsListItem = (treatment) => {
  const box = new Box();
  const li = $('<li class="treatment-box"></li>')
      .attr('id', treatment.id);

  // --- build box for treatment
  let header = box.header.text(treatment.name).addClass('treatment-item treatment-name');
  let description = box.description.text(treatment.description).addClass('treatment-item treatment-description');
  let footer = box.footer.text(`area: ${treatment.area} | time: ${treatment.time} min(s) | price: ${treatment.price}pln`);
  let content = box.buildContent(header, description, footer);
  const div = $(`<div class="order"></div>`);
  //box.find(".box-content").append(div);
  

  let image = box.image;


  li.append(box.buildBox(image, content));  
  li.find(".box-content").append(div);

  // --- events start ---
  const addTreatmentToCart = function() {
      cart.add('treatments', treatment);
  }
  li.click(addTreatmentToCart);
  
  // --- return ---
  return li;
};
