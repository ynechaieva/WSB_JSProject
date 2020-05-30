import $ from 'jquery';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes';
import { navItem } from './nav-item';
import { Cart } from '../cart/cart';

const cart = new Cart();
export const nav = () => {

  const navbar = $(`
  <nav class="navbar navbar-expand-sm bg-dark text-light">
    <div class="container-fluid">
      <span class="navbar-brand text-muted">IT&SPA |</span>
      <ul class="navbar-nav mr-auto"></ul>
      <div class="cart-dropdown">
        <div class="cart-btn bg-dark div_hover"> Cart : 0 item(s) </div>  
        <div class="cart-content dropdown-menu"></div>
      </div>
    </div>
  </nav>
`);

  // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
  const navItems = routes.map(route => {
    const { name, path } = route;
    return navItem(name, () => navbar.trigger(routeChange, { path: path }));
  });

  //---- code related to the dropdown cart ------------
  const cartList = function() {
    let totalSum = 0;
    const fragment = $(new DocumentFragment());
    // get cart content from cookies
    const cookieObj = cart.get();
    
    //-- loop for Rooms object in the cart
    cookieObj.rooms.forEach(function(item){
      totalSum += item.roomprice;
      let row = $(`<a href="/rooms"></a>`).text(item.roomname + ": " + item.roomprice + " pln");
      fragment.append(row);
    });

    //-- loop for Treatments object in the cart
    cookieObj.treatments.forEach(function(item){
      totalSum += item.treatmentprice;
      let row = $(`<a href="/treatments"></a>`).text(item.treatmentname + ": " + item.treatmentprice + " pln");
      fragment.append(row);
    });

    //-- count of items in the cart
    let total = $(`
      <a class="divider"></a> 
      <a href="/booking" class="cart-total disabled"><span>Total: ${totalSum} pln</span></a>`);

    
    fragment.append(total);
    return fragment;
};

  
  $(document).ready(function(){
    navbar.find('.cart-btn').text('Cart : ' + cart.getLength() + ' item(s)');
    $(".cart-content").text("");
    $(".cart-content").append(cartList);

  });
 
  $('body').on( "click", function(){
    navbar.find('.cart-btn').text('Cart : ' + cart.getLength() + ' item(s)');
    $(".cart-content").text("");
    $(".cart-content").append(cartList);
  });

  //---------------------------------------------------

  navbar.find('ul').append(navItems);
  return navbar;
};
