import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';
import { Button } from '../../components/button';

const cart = new Cart();

export const treatmentsListItem = (treatment) => {
  const box = new Box();
  const orderBtn = new Button("treatment-order-btn-" + treatment.id);
  orderBtn.text("Order");
  const li = $(`<li id="${treatment.id}" class="treatment-li"></li>`);

  box.addClassToBox("treatment-box");
  box.footer.addClass("treatment-footer");

  // --- build box for treatment
  let image = box.image.addClass("treatment-image");
  image.find('img').attr('src', treatment.img);
  let header = box.header.text(treatment.name).addClass('treatment-item treatment-name');
  let description = box.description.text(treatment.description).addClass('treatment-item treatment-description');
  
  let area = $(`<span> <b>Area:</b> ${treatment.area} </span>`);
  let time = $(`<span> <b>Time:</b> ${treatment.time} min(s) </span>`);
  let price = $(`<span> <b>Price:</b> ${treatment.price} pln </span>`);

  let footerStr = $(`<p></p>`);
  footerStr.append(area).append(" | ").append(time).append(" | ").append(price);
  
  let footer = box.footer.append(footerStr);
  let content = box.buildContent(header, description, footer);

  li.append(box.buildBox(image, content));  
  li.find(".box-content").addClass("treatment-box-content");
  li.find(".box-content").append(orderBtn);

  // --- functions ---
  const orderTreatment = function() {
      cart.add('treatments', {treatmentid: treatment.id, treatmentname: treatment.name, treatmentprice: treatment.price});
  }

  // ---events ---
  orderBtn.click(orderTreatment);
  
  // --- return ---
  return li;
};
