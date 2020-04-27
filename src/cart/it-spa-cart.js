import $ from 'jquery';
import { Cart } from "./cart";


// export const itSpaCart = () => {
//     const cart = new Cart();
//     const fragment = $(new DocumentFragment());


//  // return fragment;
// };

export const itSpaCart = () => {
    const cart = new Cart();
    const fragment = $(new DocumentFragment());
    let cartLength = cart.getLength();
    let row = $('<p></p>').text(cartLength + "item(s) in the cart");
    fragment.append(row);
    return fragment;
};