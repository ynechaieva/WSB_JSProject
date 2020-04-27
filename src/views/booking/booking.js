import $ from 'jquery';
import { Cart } from "../../cart/cart";

const cart = new Cart();
// export const buildCartItem = (list, fragment) => {
//   list.forEach(function(item){
//     let obj = JSON.stringify(item);
//     let row = $('<a href="#" class="full-cart-item"></a>').text(obj);
//     fragment.append(row);
//   });
//   return fragment;
// };

export const booking = () => {
  const fragment = $(new DocumentFragment());
  //fragment.append('<h2>Booking</h2>');
  const cookieObj = cart.get();

  fragment.append('<h3>Rooms</h3>');
  cookieObj.rooms.forEach(function(item){
    let obj = JSON.stringify(item);
    let row = $('<a href="#" class="full-cart-item"></a>').text(obj);
    fragment.append(row);
  });

  fragment.append('<h3>Treatments</h3>');
  cookieObj.treatments.forEach(function(item){
    let obj = JSON.stringify(item);
    let row = $('<a href="#" class="full-cart-item"></a>').text(obj);
    fragment.append(row);
  });

  return fragment;
};
