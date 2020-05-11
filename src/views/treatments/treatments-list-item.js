import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';
import { Button } from '../../components/button';

const cart = new Cart();

export const treatmentsListItem = (treatment) => {
  const box = new Box();
  const btn = new Button("Order");
  btn.addClass("treatment-order-btn");
  const li = $('<li class="treatment-box"></li>').attr('id', treatment.id);

  // --- build box for treatment
  let image = box.image.addClass("treatment-image");
  image.find('img').attr('src', treatment.img);
  let header = box.header.text(treatment.name).addClass('treatment-item treatment-name');
  let description = box.description.text(treatment.description).addClass('treatment-item treatment-description');
  let footer = box.footer.text(`area: ${treatment.area} | time: ${treatment.time} min(s) | price: ${treatment.price}pln`);
  let content = box.buildContent(header, description, footer);

  li.append(box.buildBox(image, content));  
  li.find(".box-content").append(btn);

  // --- events ---
  const orderTreatment = function() {
      cart.add('treatments', treatment.id);
  }

  btn.click(orderTreatment);
  
  // --- return ---
  return li;
};
