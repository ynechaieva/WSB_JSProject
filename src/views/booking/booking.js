import $ from 'jquery';
import { Cart } from "../../cart/cart";
import { Button } from "../../components/button";

const cart = new Cart();

export const booking = () => {
  const fragment = $(new DocumentFragment());
  const cookieObj = cart.get();
  

  const container = $(`<div class="booking-container"></div>`);
  const bookedRooms = $(`<div class="booked-rooms"><h3>Rooms</h3></div>`);
  const bookedTreatments = $(`<div class="booked-treatments"><h3>Treatments</h3></div>`);

  const remove = function(e) {
    console.log($(e.target).attr("type"), $(e.target).attr("id"));;
    cart.delete($(e.target).attr("type"), $(e.target).attr("id"));
    let divToDelete = $(e.target).parent();
    divToDelete.remove();
  };


  cookieObj.rooms.forEach(function(item){
    const elem = $(`<div class="booking-list-item"></div>`);
    let row = $(`<a href="/rooms" class="room-cart-item"></a>`).text(item.roomname + ": " + item.roomprice + " pln, " + "booked for " + item.roomrange + " period");
    let removeBtn = new Button(item.roomid);
    removeBtn.attr("type", "rooms");
    removeBtn.addClass("remove-btn").text("remove");
    elem.append(row).append(removeBtn);
    bookedRooms.append(elem);
    removeBtn.click(remove);
  });

  cookieObj.treatments.forEach(function(item){
    const elem = $(`<div class="booking-list-item"></div>`);
    let row = $('<a href="/treatments" class="treatment-cart-item"></a>').text(item.treatmentname + ": " +  item.treatmentprice + " pln ");
    let removeBtn = new Button(item.treatmentid);
    removeBtn.attr("type", "treatments");
    removeBtn.addClass("remove-btn").text("remove");
    elem.append(row).append(removeBtn);
    bookedTreatments.append(elem);

    removeBtn.click(remove);
  });

  container.append(bookedRooms).append(bookedTreatments);
  fragment.append(container);

  return fragment;
};
