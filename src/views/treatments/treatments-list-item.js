import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';
import { Button } from '../../components/button';

const cart = new Cart();

export const treatmentsListItem = (treatment) => {
  const box = new Box();
  const orderBtn = new Button("treatment-order-btn-" + treatment.id);
  const alert = $(`<div id="custom-alert-${treatment.id}" class="custom-alert alert alert-dark">Treatment is added to the cart!</div>`);
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
  li.find(".box-content").append(orderBtn).append(alert);

  // --- functions ---
  var hideTimeout = 1000; //how many ms to wait before hiding after displaying
  function customAlert() {
    //display the box
    var customAlert = document.getElementById(`custom-alert-${treatment.id}`);
    customAlert.style.visibility = 'visible';
  
    //set up a timer to hide it, a.k.a a setTimeout()
    setTimeout(function() {
      customAlert.style.visibility = 'hidden';
    }, hideTimeout)
  }

  const orderTreatment = function() {
      cart.add('treatments', {treatmentid: treatment.id, treatmentname: treatment.name, treatmentprice: treatment.price});
      //alert("Treatment is added to the cart!");
      customAlert();
  }

  // ---events ---
  orderBtn.click(orderTreatment);
  
  // --- return ---
  return li;
};
